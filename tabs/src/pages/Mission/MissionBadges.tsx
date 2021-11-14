import { Box } from '@mui/system'
import { badgeInfoSx, badgesSx } from './styles'
import Badge1stImg from '../../assets/badge-1st.png'
import CompleteCourseImg from '../../assets/badge-complete-course.png'
import AllCorrectImg from '../../assets/badge-all-correct.png'
import MissionMasterImg from '../../assets/badge-mission-master.png'
import GameMasterImg from '../../assets/badge-game-master.png'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'
import { styled } from '@mui/material/styles'

const BADGES = [
  'complete-1-mission',
  'complete-all-weekly-mission',
  'completed-all-mission',
  'mission-master',
  'game-master',
]

export default function MissionBadges() {
  return (
    <Box sx={badgesSx}>
      <div className="title">Course Badges</div>
      <div className="badges-wrapper">
        {BADGES.map((badge, idx) => (
          <BadgeInfo key={idx} type={badge} />
        ))}
      </div>
    </Box>
  )
}

const TYPE_MAPPING: Record<string, { title: string; img: string }> = {
  'complete-1-mission': {
    title: 'Completed 1 mission',
    img: Badge1stImg,
  },
  'complete-all-weekly-mission': {
    title: 'Completed all weekly mission',
    img: CompleteCourseImg,
  },
  'completed-all-mission': {
    title: 'Completed all mission',
    img: AllCorrectImg,
  },
  'mission-master': {
    title: 'Completed 1 special mission',
    img: MissionMasterImg,
  },
  'game-master': {
    title: 'Gain $1000 in mission',
    img: GameMasterImg,
  },
}

const BadgeInfo: React.FC<{ type: string }> = ({ type }) => {
  const badge = TYPE_MAPPING[type]

  return (
    <Box sx={badgeInfoSx}>
      <div className="badge-title">{badge.title}</div>
      <img className="badge-img" src={badge.img} alt="badge" />
      <div>100%</div>

      <BorderLinearProgress variant="determinate" value={40} />
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
