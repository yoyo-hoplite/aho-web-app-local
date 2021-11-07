import Banner, { useBannerHeight } from '../../components/Banner'
import { Box } from '@mui/system'
import { infoSx, titleSx, contentSx } from './styles'
import { useEffect, useState } from 'react'
import CourseList from './CourseList'
import CourseHistory from './CourseHistory'
import CourseBadges from './CourseBadges'
import axios, { AxiosResponse } from 'axios'
import qs from 'qs'
import useLogin from '../../hooks/useLogin'
import Navigator from '../../components/Navigator'

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
      const courseIds = await axios({
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        url: 'https://api.hoplite.info/aho_functions_internal_staging/aho-get-course',
        data: qs.stringify({
          courseid: 'all',
        }),
      })

      const result = await Promise.allSettled<AxiosResponse>(
        courseIds.data.course.map((courseid: number) =>
          axios({
            method: 'POST',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            url: 'https://api.hoplite.info/aho_functions_internal_staging/aho-get-course',
            data: qs.stringify({ courseid }),
          }),
        ),
      )
      // Debug msg
      console.log('result', result)
      // typescript can not recognize PromiseSettledResult as an array
      // @ts-ignore
      const mergesCourses = result
        .filter(response => response.status === 'fulfilled')
        .map(response => (response as PromiseFulfilledResult<AxiosResponse>).value.data.course)

      setCourses(mergesCourses)
    })()
  }, [])

  return (
    <main style={{ height: '100%' }}>
      <Navigator />
      <Banner />
      <div
        style={{
          display: 'flex',
          height: contentHeight,
          // min height based on History + Badges section
          minHeight: '823px',
        }}
      >
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
