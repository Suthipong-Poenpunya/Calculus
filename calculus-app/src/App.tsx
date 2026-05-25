import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { Dashboard } from '@/pages/Dashboard'
import { CourseOverview } from '@/pages/CourseOverview'
import { LessonPage } from '@/pages/LessonPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="course/:courseId" element={<CourseOverview />} />
        <Route path="lesson/:courseId/:lessonId" element={<LessonPage />} />
      </Route>
    </Routes>
  )
}
