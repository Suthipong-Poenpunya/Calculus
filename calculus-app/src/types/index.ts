export type MathFn = (x: number) => number

export type FunctionPresetKey = 'linear' | 'quadratic' | 'sine' | 'exponential' | 'cubic'

export interface FunctionPreset {
  key: FunctionPresetKey
  label: string
  fn: MathFn
  katex: string
  domain: [number, number]
  integralDomain: [number, number]
}

export interface GraphBounds {
  xMin: number
  xMax: number
  yMin: number
  yMax: number
  width: number
  height: number
}

export type RiemannMethod = 'left' | 'right' | 'midpoint'

export type CourseId = 'precalculus' | 'calculus1' | 'calculus2'

export type VisualizerName = 'LimitsVisualizer' | 'DerivativeVisualizer'

export type LessonBlock =
  | { type: 'text'; content: string }
  | { type: 'equation'; tex: string; display?: boolean }
  | { type: 'visualizer'; name: VisualizerName }
  | { type: 'example'; title: string; steps: string[] }
  | { type: 'quiz'; questions: QuizQuestion[] }

export interface QuizQuestion {
  question: string
  choices: string[]
  correctIndex: number
  explanation: string
  lessonId?: string
}

export interface Lesson {
  id: string
  title: string
  course: CourseId
  chapter: string
  order: number
  estimatedMinutes: number
  blocks: LessonBlock[]
  isChapterReview?: true
}

export interface ProgressStore {
  completedLessons: string[]
  visitedLessons: string[]
  quizScores: Record<string, number>
  completedReviews: string[]
  reviewScores: Record<string, number>
}
