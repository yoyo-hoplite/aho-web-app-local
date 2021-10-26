import Banner, { useBannerHeight } from '../../components/Banner'
import { Box } from '@mui/system'
import { infoSx, titleSx, courseListSx } from './styles'
import { useEffect, useState } from 'react'
import { FAKE_COURSES } from './fakedata'
import CourseList from './CourseList'

export const CoursePage = () => {
  const [courses, setCourses] = useState(FAKE_COURSES)
  const { bannerHeight } = useBannerHeight()
  const [contentHeight, setContentHeight] = useState<string>(`calc(100% - ${bannerHeight}px)`)

  useEffect(() => {
    setContentHeight(`calc(100% - ${bannerHeight}px)`)
  }, [bannerHeight])

  return (
    <main style={{ height: '100%' }}>
      <Banner />
      <div style={{ display: 'flex', height: contentHeight }}>
        {/* Courses List */}
        <Box sx={courseListSx}>
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

          <CourseList courses={courses} />
        </Box>

        {/* History and Badges */}
        <Box sx={infoSx}>123</Box>
      </div>
    </main>
  )
}

export default CoursePage
