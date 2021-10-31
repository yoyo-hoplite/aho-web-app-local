import { Box } from '@mui/system'
import { historySx, historyRowSx } from './styles'
import RuleIcon from '../../assets/rule-icon-2-blue.png'
import { useState } from 'react'
import { FAKE_COURSE_HISTORY } from './fakedata'

export default function CourseHistory() {
  const [histories, setHistories] = useState(FAKE_COURSE_HISTORY)

  return (
    <Box sx={historySx}>
      <section className='title-wrapper'>
        <img className='rule-icon' src={RuleIcon} alt='rule' />
        <div>
          <div className='title'>Course History</div>
          <Box display='flex' alignItems='center'>
            <div className='completed'>
              <span className='legend' />
              <span>10 Completed</span>
            </div>
            <div className='processing'>
              <span className='legend' />
              <span>2 Processing</span>
            </div>
          </Box>
        </div>
      </section>

      <section>
        <div className='navigation-row'>
          <span>{'<'}</span>
          <span className='type'>Video</span>
          <span>{'>'}</span>
        </div>

        {histories.map((history) => (
          <HistoryRow history={history} />
        ))}
      </section>
    </Box>
  )
}

const HistoryRow: React.FC<{ history: any }> = ({ history }) => {
  return (
    <Box sx={historyRowSx}>
      <div>
        <div className='name'>{history.category1}</div>
        <div>
          <span>{history.timestamp.split('@')[0]}</span>
          <span style={{ marginLeft: '4px' }}>Score:{history.score_init} (Pass)</span>
        </div>
      </div>
      <div>+${history.score_complete}</div>
    </Box>
  )
}
