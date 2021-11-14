import { Box, styled, SxProps, Theme } from '@mui/system'
import { useTeams } from 'msteams-react-base-component'
import { useHistory, useRouteMatch } from 'react-router-dom'
import Logo from '../assets/AHO-logo.png'
import { ROUTES } from '../utils/constant'

export const NAVIGATOR_HEIGHT = 100

const navigatorSx: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  height: `${NAVIGATOR_HEIGHT}px`,
}

const Tab = styled('div')({
  fontSize: '28px',
  lineHeight: `${NAVIGATOR_HEIGHT}px`,
  height: `${NAVIGATOR_HEIGHT}px`,
  paddingBottom: '28px',
  marginLeft: '48px',
  '&.active': {
    borderBottom: 'solid 5px #8C8EBD',
    paddingBottom: '23px',
  },
  '&:hover': {
    cursor: 'pointer',
    opacity: 0.7,
  },
})

export default function Navigator() {
  const [{ inTeams }] = useTeams()
  const history = useHistory()
  const routeMatch = {
    mission: useRouteMatch(ROUTES.mission),
    courses: useRouteMatch(ROUTES.courses),
  }

  return inTeams ? null : (
    <Box sx={navigatorSx}>
      <img style={{ height: '72px', marginLeft: '24px' }} src={Logo} alt="logo" />
      <Tab>Main</Tab>
      <Tab className={routeMatch.mission ? 'active' : ''} onClick={() => history.push(ROUTES.mission)}>
        Mission
      </Tab>
      <Tab className={routeMatch.courses ? 'active' : ''} onClick={() => history.push(ROUTES.courses)}>
        Course
      </Tab>
      <Tab>Award</Tab>
      <Tab>CDP</Tab>
      <Tab>About</Tab>
    </Box>
  )
}
