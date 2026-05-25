import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { QuizBlock } from '@/components/blocks/QuizBlock'

const singleQuestion = [
  {
    question: 'ถ้า f(x) = x + 1 แล้ว f(2) = ?',
    choices: ['1', '2', '3', '4'],
    correctIndex: 2,
    explanation: 'f(2) = 2 + 1 = 3',
  },
]

const twoQuestions = [
  {
    question: 'ข้อแรก: 1 + 1 = ?',
    choices: ['1', '2', '3', '4'],
    correctIndex: 1,
    explanation: '1 + 1 = 2',
  },
  {
    question: 'ข้อสอง: 2 + 2 = ?',
    choices: ['2', '3', '4', '5'],
    correctIndex: 2,
    explanation: '2 + 2 = 4',
  },
]

test('renders question text and all choices', () => {
  render(<QuizBlock questions={singleQuestion} onComplete={() => {}} />)
  expect(screen.getByText(/f\(x\) = x \+ 1/)).toBeInTheDocument()
  expect(screen.getByText('3')).toBeInTheDocument()
  expect(screen.getByText('1')).toBeInTheDocument()
})

test('correct choice shows success feedback', () => {
  render(<QuizBlock questions={singleQuestion} onComplete={() => {}} />)
  fireEvent.click(screen.getByText('3'))
  expect(screen.getByText('ถูกต้อง!')).toBeInTheDocument()
})

test('incorrect choice shows explanation', () => {
  render(<QuizBlock questions={singleQuestion} onComplete={() => {}} />)
  fireEvent.click(screen.getByText('1'))
  expect(screen.getByText('f(2) = 2 + 1 = 3')).toBeInTheDocument()
})

test('calls onComplete with 100 when single question answered correctly first try', () => {
  const onComplete = vi.fn()
  render(<QuizBlock questions={singleQuestion} onComplete={onComplete} />)
  fireEvent.click(screen.getByText('3'))
  fireEvent.click(screen.getByText('ดูผลลัพธ์'))
  expect(onComplete).toHaveBeenCalledWith(100)
})

test('calls onComplete with 50 when 1 of 2 correct on first try', () => {
  const onComplete = vi.fn()
  render(<QuizBlock questions={twoQuestions} onComplete={onComplete} />)
  // Q1: correct first try
  fireEvent.click(screen.getByText('2'))
  fireEvent.click(screen.getByText('ข้อถัดไป →'))
  // Q2: wrong first, then correct
  fireEvent.click(screen.getByText('2'))
  fireEvent.click(screen.getByText('ลองใหม่'))
  fireEvent.click(screen.getByText('4'))
  fireEvent.click(screen.getByText('ดูผลลัพธ์'))
  expect(onComplete).toHaveBeenCalledWith(50)
})

const hintQuestion = [
  {
    question: 'ถ้า $f(x) = x + 1$ แล้ว $f(2) = ?$',
    choices: ['ถูก: 3', 'ผิด: 4', 'ผิด: 1', 'ผิด: 2'],
    correctIndex: 0,
    explanation: 'f(2) = 2 + 1 = 3',
    lessonId: 'functions-intro',
  },
]

test('shows hint link when incorrect and lessonId + courseId are present', () => {
  render(
    <MemoryRouter>
      <QuizBlock questions={hintQuestion} onComplete={() => {}} courseId="precalculus" />
    </MemoryRouter>
  )
  fireEvent.click(screen.getByText('ผิด: 4'))
  expect(screen.getByText(/กลับไปอ่าน/)).toBeInTheDocument()
})

test('does not show hint link when courseId is not provided', () => {
  render(
    <MemoryRouter>
      <QuizBlock questions={hintQuestion} onComplete={() => {}} />
    </MemoryRouter>
  )
  fireEvent.click(screen.getByText('ผิด: 4'))
  expect(screen.queryByText(/กลับไปอ่าน/)).not.toBeInTheDocument()
})
