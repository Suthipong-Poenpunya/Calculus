import type { Lesson } from '@/types'
import { TextBlock } from '@/components/blocks/TextBlock'
import { EquationBlock } from '@/components/blocks/EquationBlock'
import { ExampleBlock } from '@/components/blocks/ExampleBlock'
import { VisualizerBlock } from '@/components/blocks/VisualizerBlock'
import { QuizBlock } from '@/components/blocks/QuizBlock'

interface Props {
  lesson: Lesson
  onQuizComplete: (score: number) => void
  courseId?: string
}

export function LessonEngine({ lesson, onQuizComplete, courseId }: Props) {
  return (
    <div className="space-y-6">
      {lesson.blocks.map((block, i) => {
        switch (block.type) {
          case 'text':
            return <TextBlock key={i} content={block.content} />
          case 'equation':
            return <EquationBlock key={i} tex={block.tex} display={block.display} />
          case 'example':
            return <ExampleBlock key={i} title={block.title} steps={block.steps} />
          case 'visualizer':
            return <VisualizerBlock key={i} name={block.name} />
          case 'quiz':
            return <QuizBlock key={i} questions={block.questions} onComplete={onQuizComplete} courseId={courseId} />
        }
      })}
    </div>
  )
}
