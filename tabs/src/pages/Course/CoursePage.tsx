import Banner, { useBannerHeight } from '../../components/Banner'
import { Box } from '@mui/system'
import { infoSx, titleSx, contentSx } from './styles'
import { useEffect, useState } from 'react'
import CourseList from './CourseList'
import CourseHistory from './CourseHistory'
import CourseBadges from './CourseBadges'
import axios from 'axios'
import qs from 'qs'
import useLogin from '../../hooks/useLogin'

export const CoursePage = () => {
  useLogin()
  // TODO: course type
  const [courses, setCourses] = useState<any[]>([])
  const { bannerHeight } = useBannerHeight()
  const [contentHeight, setContentHeight] = useState<string>(`calc(100% - ${bannerHeight}px)`)

  useEffect(() => {
    setContentHeight(`calc(100% - ${bannerHeight}px)`)
  }, [bannerHeight])

  useEffect(() => {
    // NOTE: API works only at production site due to CORS issue
    ;(async () => {
      const params = {
        courseId: 1,
      }
      const result = await axios({
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        url: 'https://api.hoplite.info/aho_functions_internal_staging/aho-get-course',
        data: qs.stringify(params),
      })
      // Debug msg
      console.log(result.data)

      setCourses([result.data.course])
    })()
  }, [])

  return (
    <main style={{ height: '100%' }}>
      <Banner />
      <div style={{ display: 'flex', height: contentHeight }}>
        {/* Courses List */}
        <Box sx={contentSx}>
          <Box sx={titleSx}>
            <div className="title">Courses List</div>
            <div className="completed">
              <span className="legend" />
              <span>10 Completed</span>
            </div>
            <div className="processing">
              <span className="legend" />
              <span>2 Processing</span>
            </div>
          </Box>

          <CourseList courses={courses} />
        </Box>

        {/* History and Badges */}
        <Box sx={infoSx}>
          <CourseHistory />
          <CourseBadges />
        </Box>
      </div>
    </main>
  )
}

export default CoursePage
