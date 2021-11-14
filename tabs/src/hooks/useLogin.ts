import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { ROUTES } from '../utils/constant'

export const UID_KEY = 'uid'

export default function useLogin() {
  const history = useHistory()
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    const hasLoginBefore = sessionStorage.getItem(UID_KEY)

    if (!hasLoginBefore) {
      setIsLogin(false)
      history.push(ROUTES.login)
      return
    }

    setIsLogin(true)
  }, [history])

  return { isLogin }
}
