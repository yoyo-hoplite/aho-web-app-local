export type CourseType = 'game' | 'video' | 'quiz' | 'article' | 'video2' | 'quiz3' | 'quiz4' | 'quiz5'

export interface Course {
  courseid: string
  category1: string
  category2: string
  skills: string[]
  score_init: string
  score_complete: string
  score_pass: string
  duration: string
  url: string
  url_moile: string
  test_id: string
  test_url: string
  media: CourseType
  schedule_time: string
  schedule_day: string
  thumbnail: string | null
  timestamp: string
  mandatory: string[]
  cpd: string[]
  required_skills: string[]
}

export interface CourseHistory {
  courseid: string
  uid: string
  score: string
  duration: string
  correct: string[]
  incorrect: string[]
  timestamp: string
}
