import { TextField, InputAdornment, Button } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import qs from 'qs'
import { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { ROUTES } from '../../utils/constant'
import { loginSx, textSx } from './styles'

function isValidInput(email: string, password: string) {
  // TODO: validation
  if (email.length < 3) {
    return false
  }

  if (password.length < 3) {
    return false
  }

  return true
}

export default function LoginPage() {
  const history = useHistory()
  const [isValid, setIsValid] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    setIsValid(isValidInput(email, password))
  }, [email, password])

  const onLogin = useCallback(async () => {
    const params = { email, password }
    const result = await axios({
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      url: 'https://api.hoplite.info/aho_functions_internal_staging/aho-get-login',
      data: qs.stringify(params),
    })
    if (result.data.status === '1') {
      sessionStorage.setItem('uid', result.data.login.uid)
      history.push(ROUTES.courses)
      return
    }

    setErrorMsg('Incorrect email or password')
  }, [email, password, history])

  return (
    <main style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={loginSx}>
        <div className="title">Login</div>
        <TextField
          sx={textSx}
          id="email"
          label="Email"
          InputProps={{
            startAdornment: <InputAdornment position="start">ICON</InputAdornment>,
          }}
          value={email}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
          variant="standard"
          type="email"
        />
        <TextField
          sx={textSx}
          id="password"
          label="Password"
          InputProps={{
            startAdornment: <InputAdornment position="start">ICON</InputAdornment>,
            endAdornment: <InputAdornment position="end">ICON</InputAdornment>,
          }}
          value={password}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
          variant="standard"
          type="password"
        />
        <div style={{ textAlign: 'center' }}>
          <Button variant="contained" disabled={!isValid} onClick={onLogin}>
            Log in
          </Button>
          {errorMsg && <div className="error-msg">{errorMsg}</div>}
        </div>
      </Box>
    </main>
  )
}
