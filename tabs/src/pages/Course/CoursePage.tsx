import Banner from '../../components/Banner'
import { Box } from '@mui/system'
import { titleSx } from './styles'

export const CoursePage = () => {
  return (
    <main>
      <section>
        <Banner />
        <Box sx={titleSx}>
          <div className='title'>Courses List</div>
          <div className='completed'>
            <span className='legend' />
            <span>10 Completed</span>
          </div>
          <div className='processing'>
            <span className='legend' />
            <span>2 Processing</span>
          </div>
        </Box>
        <div></div>
      </section>
    </main>
  )
}

export default CoursePage
