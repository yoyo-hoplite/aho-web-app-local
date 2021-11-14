import { Box } from '@mui/system'
import { historySx, historyRowSx } from './styles'
import RuleIcon from '../../assets/rule-icon-2-blue.png'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { UID_KEY } from '../../hooks/useLogin'
import qs from 'qs'
import { Course, CourseHistory, CourseType } from '../../utils/type'

const MAX_HISTORY_PER_TYPE = 5

const COURSE_TYPES: (CourseType | 'all')[] = [
  'all',
  'article',
  'game',
  'quiz',
  'quiz3',
  'quiz4',
  'quiz5',
  'video',
  'video2',
]

interface Props {
  courses: Course[]
}

export default function CourseHistories(props: Props) {
  const { courses } = props
  const [histories, setHistories] = useState<CourseHistory[]>([])
  const [currentTypeIdx, setCurrentTypeIdx] = useState<number>(0)

  useEffect(() => {
    if (courses.length === 0) {
      return
    }

    const uid = sessionStorage.getItem(UID_KEY)
    // NOTE: API works only at production site due to CORS issue
    ;(async () => {
      const historyList = await axios({
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        url: 'https://api.hoplite.info/aho_functions_internal_staging/aho-get-course2user',
        data: qs.stringify({ uid }),
      })

      setHistories(historyList.data.course2user)
    })()
  }, [courses])

  return (
    <Box sx={historySx}>
      <section className="title-wrapper">
        <img className="rule-icon" src={RuleIcon} alt="rule" />
        <div>
          <div className="title">Course History</div>
          <Box display="flex" alignItems="center">
            <div className="completed">
              <span className="legend" />
              <span>10 Completed</span>
            </div>
            <div className="processing">
              <span className="legend" />
              <span>2 Processing</span>
            </div>
          </Box>
        </div>
      </section>

      <section>
        <div className="navigation-row">
          <span
            className={`arrow ${currentTypeIdx === 0 ? 'disabled' : ''}`}
            onClick={() => setCurrentTypeIdx(currentTypeIdx - 1)}
          >
            {'<'}
          </span>
          <span className="type">{COURSE_TYPES[currentTypeIdx]}</span>
          <span
            className={`arrow ${currentTypeIdx === COURSE_TYPES.length - 1 ? 'disabled' : ''}`}
            onClick={() => setCurrentTypeIdx(currentTypeIdx + 1)}
          >
            {'>'}
          </span>
        </div>

        {histories
          .filter(history => {
            if (COURSE_TYPES[currentTypeIdx] === 'all') return true

            const historyType = courses.find(c => history.courseid === c.courseid)?.media
            return historyType === COURSE_TYPES[currentTypeIdx]
          })
          .slice(0, MAX_HISTORY_PER_TYPE)
          .map((history, idx) => (
            <HistoryRow key={idx} history={history} course={courses.find(c => c.courseid === history.courseid)!} />
          ))}
      </section>
    </Box>
  )
}

const HistoryRow: React.FC<{ history: CourseHistory; course: Course }> = ({ history, course }) => {
  return (
    <Box sx={historyRowSx}>
      <div>
        <div className="name">{course.category1}</div>
        <div>
          <span>{history.timestamp.split('@')[0]}</span>
          <span style={{ marginLeft: '4px' }}>Score:{history.score} (Pass)</span>
        </div>
      </div>
      <div>+${course.score_complete}</div>
    </Box>
  )
}
