import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { LessonEngine } from '@/components/engine/LessonEngine'
import type { Lesson } from '@/types'

const mockLesson: Lesson = {
  id: 'test-lesson',
  title: 'Test Lesson',
  course: 'precalculus',
  chapter: 'test',
  order: 1,
  estimatedMinutes: 5,
  blocks: [
    { type: 'text', content: 'สวัสดีชาวโลก' },
    { type: 'example', title: 'Example Title', steps: ['Step A', 'Step B'] },
  ],
}

test('renders text blocks', () => {
  render(<LessonEngine lesson={mockLesson} onQuizComplete={() => {}} />)
  expect(screen.getByText('สวัสดีชาวโลก')).toBeInTheDocument()
})

test('renders example blocks with title and steps', () => {
  render(<LessonEngine lesson={mockLesson} onQuizComplete={() => {}} />)
  expect(screen.getByText('Example Title')).toBeInTheDocument()
  expect(screen.getByText('Step A')).toBeInTheDocument()
  expect(screen.getByText('Step B')).toBeInTheDocument()
})

test('renders visualizer block with suspense fallback', async () => {
  const vizLesson: Lesson = {
    id: 'viz-test',
    title: 'Viz Test',
    course: 'precalculus',
    chapter: 'test',
    order: 1,
    estimatedMinutes: 5,
    blocks: [
      { type: 'visualizer', name: 'LimitsVisualizer' },
    ],
  }
  const { container } = render(<LessonEngine lesson={vizLesson} onQuizComplete={() => {}} />)
  // Suspense fallback should be present while lazy component loads
  expect(container.querySelector('.animate-pulse')).toBeTruthy()
})

test('passes courseId to quiz blocks', async () => {
  const quizLesson: Lesson = {
    id: 'quiz-test',
    title: 'Quiz Test',
    course: 'precalculus',
    chapter: 'test',
    order: 1,
    estimatedMinutes: 5,
    blocks: [
      {
        type: 'quiz',
        questions: [
          {
            question: 'คำถาม',
            choices: ['ถูก', 'ผิด: A', 'ผิด: B', 'ผิด: C'],
            correctIndex: 0,
            explanation: 'อธิบาย',
            lessonId: 'functions-intro',
          },
        ],
      },
    ],
  }
  render(
    <MemoryRouter>
      <LessonEngine lesson={quizLesson} onQuizComplete={() => {}} courseId="precalculus" />
    </MemoryRouter>
  )
  fireEvent.click(screen.getByText('ผิด: A'))
  expect(screen.getByText(/กลับไปอ่าน/)).toBeInTheDocument()
})
