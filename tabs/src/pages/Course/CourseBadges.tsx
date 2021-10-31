import { Box } from '@mui/system'
import { badgeInfoSx, badgesSx } from './styles'
import Badge1stImg from '../../assets/badge-1st.png'
import CompleteCourseImg from '../../assets/badge-complete-course.png'
import AllCorrectImg from '../../assets/badge-all-correct.png'
import MissionMasterImg from '../../assets/badge-mission-master.png'
import GameMasterImg from '../../assets/badge-game-master.png'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'
import { styled } from '@mui/material/styles'

const BADGES = ['1st-rank', 'complete-course', 'all-correct', 'mission-master', 'game-master']

export default function CourseBadges() {
  return (
    <Box sx={badgesSx}>
      <div className='title'>Course Badges</div>
      <div className='badges-wrapper'>
        {BADGES.map((badge) => (
          <BadgeInfo type={badge} />
        ))}
      </div>
    </Box>
  )
}

const TYPE_MAPPING: Record<string, { title: string; img: string }> = {
  '1st-rank': {
    title: '1st rank',
    img: Badge1stImg,
  },
  'complete-course': {
    title: 'Complete course',
    img: CompleteCourseImg,
  },
  'all-correct': {
    title: 'Answer all correct',
    img: AllCorrectImg,
  },
  'mission-master': {
    title: 'Finish 10 mission',
    img: MissionMasterImg,
  },
  'game-master': {
    title: 'Play 10 times game',
    img: GameMasterImg,
  },
}

const BadgeInfo: React.FC<{ type: string }> = ({ type }) => {
  const badge = TYPE_MAPPING[type]

  return (
    <Box sx={badgeInfoSx}>
      <div className='badge-title'>{badge.title}</div>
      <img className='badge-img' src={badge.img} alt='badge' />
      <div>100%</div>

      <BorderLinearProgress variant='determinate' value={30} />
    </Box>
  )
}

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  marginTop: '8px',
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#F1F1F1',
    border: 'solid 1px  #C9C9C9',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#006EC2',
  },
}))
