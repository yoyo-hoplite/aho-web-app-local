import { Box } from '@mui/system'
import DateAdapter from '@mui/lab/AdapterDayjs'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import StaticDatePicker from '@mui/lab/StaticDatePicker'
import React, { useState } from 'react'
import { TextField } from '@mui/material'
import RuleIcon from '../../assets/rule-icon-2-green.png'
import { missionCalendarSx } from './styles'

export default function MissionCalendar() {
  const [value, setValue] = useState<Date | null>(new Date())

  return (
    <Box sx={missionCalendarSx}>
      <section className="title-wrapper">
        <img className="rule-icon" src={RuleIcon} alt="rule" />
        <div>
          <div className="title">Calendar</div>
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
      <LocalizationProvider dateAdapter={DateAdapter}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          openTo="day"
          value={value}
          onChange={(newValue: any) => {
            setValue(newValue)
          }}
          renderInput={(params: any) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Box>
  )
}
