import React, { useEffect } from 'react'
// https://fluentsite.z22.web.core.windows.net/quick-start
import { HashRouter as Router, Redirect, Route } from 'react-router-dom'
import { useTeamsFx } from './components/sample/lib/useTeamsFx'
import Privacy from './components/Privacy'
import TermsOfUse from './components/TermsOfUse'
import CoursePage from './pages/Course/CoursePage'
import { ROUTES } from './utils/constant'
import LoginPage from './pages/Login/LoginPage'
import MissionPage from './pages/Mission/MissionPage'

/**
 * The main app which handles the initialization and routing
 * of the app.
 */
export default function App() {
  const { loading } = useTeamsFx()

  useEffect(() => {
    console.log('Version', process.env.REACT_APP_VERSION)
  }, [])

  return (
    <Router>
      <Route exact path="/">
        <Redirect to={ROUTES.courses} />
      </Route>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Route exact path={ROUTES.login} component={LoginPage} />
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/termsofuse" component={TermsOfUse} />
          <Route exact path={ROUTES.courses} component={CoursePage} />
          <Route exact path={ROUTES.mission} component={MissionPage} />
        </>
      )}
    </Router>
  )
}
