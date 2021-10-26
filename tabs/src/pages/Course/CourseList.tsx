import { Box } from '@mui/system'
import CrownImg from '../../assets/crown.png'
import { courseListSx, courseCardSx } from './styles'

interface Props {
  courses: any[]
}

export default function CourseList(props: Props) {
  const { courses } = props

  return (
    <Box component='section' sx={courseListSx}>
      {courses.map((course, idx) => (
        <CourseCard key={idx} course={course} />
      ))}
    </Box>
  )
}

const CourseCard: React.FC<{ course: any }> = ({ course }) => {
  return (
    <Box component='figure' sx={courseCardSx}>
      <img className='thumbnail' src={CrownImg} alt='img' />
      <div className='wrapper'>
        <div className='title'>{course.category1}</div>
        <div className='info'>
          <span>
            Time: {course.duration} | Coins: {course.score_complete}
          </span>
        </div>
        <div className='content'>{course.category2}</div>
      </div>
    </Box>
  )
}
