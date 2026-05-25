import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'unit-circle',
  title: 'วงกลมหนึ่งหน่วยและฟังก์ชันตรีโกณมิติ',
  course: 'precalculus',
  chapter: 'ตรีโกณมิติ',
  order: 7,
  estimatedMinutes: 20,
  blocks: [
    { type: 'text', content: 'วงกลมหนึ่งหน่วย (Unit Circle) คือวงกลมรัศมี 1 ที่จุดกำเนิด จุดทุกจุด (x, y) บนวงกลมนี้กำหนดค่า cos และ sin ของมุม θ ที่วัดจากแกน x บวก' },
    { type: 'equation', tex: 'x^2 + y^2 = 1', display: true },
    { type: 'equation', tex: '\\cos\\theta = x \\qquad \\sin\\theta = y \\qquad \\tan\\theta = \\frac{y}{x}', display: true },
    { type: 'text', content: 'ค่า cos และ sin ที่มุมสำคัญ: ควรจำค่าเหล่านี้เพราะใช้บ่อยมากในแคลคูลัส' },
    { type: 'example', title: 'ตัวอย่าง — ค่าของฟังก์ชันตรีโกณมิติที่มุมสำคัญ', steps: ['θ = 0: cos(0) = 1, sin(0) = 0', 'θ = π/6 (30°): cos(π/6) = √3/2, sin(π/6) = 1/2', 'θ = π/4 (45°): cos(π/4) = √2/2, sin(π/4) = √2/2', 'θ = π/3 (60°): cos(π/3) = 1/2, sin(π/3) = √3/2', 'θ = π/2 (90°): cos(π/2) = 0, sin(π/2) = 1', 'θ = π (180°): cos(π) = −1, sin(π) = 0'] },
    { type: 'quiz', questions: [
      { question: 'sin(π/2) มีค่าเท่าใด', choices: ['1', '0', '√2/2', '1/2'], correctIndex: 0, explanation: 'ที่ θ = π/2 จุดบนวงกลมหนึ่งหน่วยคือ (0, 1) ดังนั้น sin(π/2) = y = 1' },
      { question: 'cos(π) มีค่าเท่าใด', choices: ['−1', '0', '1', '−√2/2'], correctIndex: 0, explanation: 'ที่ θ = π จุดบนวงกลมหนึ่งหน่วยคือ (−1, 0) ดังนั้น cos(π) = x = −1' },
    ]},
  ],
}
