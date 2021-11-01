import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { ROUTES } from '../utils/constant'

export default function useLogin() {
  const history = useHistory()
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    const hasLoginBefore = sessionStorage.getItem('isLogin')

    if (!hasLoginBefore) {
      setIsLogin(false)
      history.push(ROUTES.login)
      return
    }

    setIsLogin(true)
  }, [history])

  return { isLogin }
}
