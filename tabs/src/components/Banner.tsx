import { Box } from '@mui/system'
import BannerImg from '../assets/banner.png'
import HKSTPImg from '../assets/HKSTP.png'
import CrownImg from '../assets/crown.png'
import { SxProps, Theme } from '@mui/system'
import { useEffect, useState } from 'react'
import { useTeams } from 'msteams-react-base-component'
import { NAVIGATOR_HEIGHT } from './Navigator'

const sx: SxProps<Theme> = {
  position: 'relative',
  '& .bg': {
    width: '100vw',
  },
  '& .wrapper': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '9%',
    paddingRight: '4%',
    '& .hkstp': {
      height: '60%',
      marginRight: '5%',
    },
    '& .crown': {
      height: '90%',
    },
    '& .title': {
      flex: 1,
      fontSize: '24px',
      fontWeight: 'normal',
      '& .name': {
        fontSize: '48px',
        fontWeight: 'bold',
      },
    },
  },
}

export const useBannerHeight = () => {
  const [bannerHeight, setBannerHeight] = useState(220)
  const [{ inTeams }] = useTeams()

  useEffect(() => {
    function onResize() {
      const height = document.getElementById('banner')!.clientHeight
      setBannerHeight(height + (inTeams ? 0 : NAVIGATOR_HEIGHT))
    }
    window.addEventListener('resize', onResize)
    onResize()

    return () => window.removeEventListener('resize', onResize)
  }, [inTeams])

  return { bannerHeight }
}

export default function Banner() {
  return (
    <Box sx={sx} id="banner">
      <img className="bg" src={BannerImg} alt="banner" />
      <div className="wrapper">
        <img className="hkstp" src={HKSTPImg} alt="HKSTP" />
        <div className="title">
          <div className="name">Cybersecurity Training</div>
          <div>20/9/2021 - 30/10/2021</div>
        </div>
        <img className="crown" src={CrownImg} alt="crown" />
      </div>
    </Box>
  )
}
