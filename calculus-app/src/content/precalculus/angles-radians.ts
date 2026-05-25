import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'angles-radians',
  title: 'มุมและการวัดในหน่วยเรเดียน (Angles & Radians)',
  course: 'precalculus',
  chapter: 'ตรีโกณมิติ',
  order: 6,
  estimatedMinutes: 15,
  blocks: [
    { type: 'text', content: 'ในแคลคูลัสเราวัดมุมเป็น เรเดียน (radian) เกือบตลอด เพราะสูตรอนุพันธ์และอินทิกรัลของฟังก์ชันตรีโกณมิติใช้ได้สวยงามเฉพาะเมื่อมุมเป็นเรเดียน' },
    { type: 'equation', tex: '\\theta \\;(\\text{เรเดียน}) = \\frac{s}{r} \\quad \\text{โดย } s \\text{ คือความยาวส่วนโค้ง, } r \\text{ คือรัศมี}', display: true },
    { type: 'equation', tex: '\\pi \\text{ เรเดียน} = 180^\\circ \\quad\\Longrightarrow\\quad 1^\\circ = \\frac{\\pi}{180} \\text{ เรเดียน}', display: true },
    { type: 'example', title: 'ตัวอย่าง — แปลงหน่วย', steps: ['แปลง 60° เป็นเรเดียน: 60 × (π/180) = π/3 ≈ 1.047 เรเดียน', 'แปลง 270° เป็นเรเดียน: 270 × (π/180) = 3π/2 เรเดียน', 'แปลง π/6 เรเดียนเป็นองศา: (π/6) × (180/π) = 30°', 'มุมสำคัญ: 0° = 0, 30° = π/6, 45° = π/4, 60° = π/3, 90° = π/2, 180° = π'] },
    { type: 'quiz', questions: [
      { question: '90° เท่ากับกี่เรเดียน', choices: ['π/2', 'π', 'π/4', '2π'], correctIndex: 0, explanation: '90 × (π/180) = π/2 เรเดียน' },
      { question: '3π/4 เรเดียนเท่ากับกี่องศา', choices: ['135°', '120°', '150°', '90°'], correctIndex: 0, explanation: '(3π/4) × (180/π) = 3 × 45 = 135°' },
    ]},
  ],
}
