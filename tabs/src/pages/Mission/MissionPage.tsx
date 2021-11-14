import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Banner, { useBannerHeight } from '../../components/Banner'
import Navigator from '../../components/Navigator'
import MissionBadges from './MissionBadges'
import MissionCalendar from './MissionCanlendar'
import { missionContentSx, missionSidebarSx } from './styles'

export default function MissionPage() {
  const { bannerHeight } = useBannerHeight()
  const [contentHeight, setContentHeight] = useState<string>(`calc(100% - ${bannerHeight}px)`)

  useEffect(() => {
    setContentHeight(`calc(100% - ${bannerHeight}px)`)
  }, [bannerHeight])

  return (
    <main style={{ height: '100%' }}>
      <Navigator />
      <Banner />
      <div
        style={{
          display: 'flex',
          height: contentHeight,
          // min height based on Calendar + Badges section
          minHeight: '823px',
        }}
      >
        <Box sx={missionContentSx}></Box>
        <Box sx={missionSidebarSx}>
          <MissionCalendar />
          <MissionBadges />
        </Box>
      </div>
    </main>
  )
}
