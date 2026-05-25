import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'trig-identities',
  title: 'เอกลักษณ์ตรีโกณมิติ (Trigonometric Identities)',
  course: 'precalculus',
  chapter: 'ตรีโกณมิติ',
  order: 8,
  estimatedMinutes: 20,
  blocks: [
    { type: 'text', content: 'เอกลักษณ์ตรีโกณมิติ (Trigonometric Identities) คือสมการที่เป็นจริงสำหรับทุกค่าของมุม ใช้แปลงรูปนิพจน์ในแคลคูลัส โดยเฉพาะในการอินทิเกรต' },
    { type: 'equation', tex: '\\sin^2\\theta + \\cos^2\\theta = 1', display: true },
    { type: 'equation', tex: '\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} \\qquad \\sec\\theta = \\frac{1}{\\cos\\theta} \\qquad \\csc\\theta = \\frac{1}{\\sin\\theta}', display: true },
    { type: 'equation', tex: '\\sin(A + B) = \\sin A\\cos B + \\cos A\\sin B', display: true },
    { type: 'equation', tex: '\\cos(2\\theta) = \\cos^2\\theta - \\sin^2\\theta = 1 - 2\\sin^2\\theta', display: true },
    { type: 'example', title: 'ตัวอย่าง — ใช้เอกลักษณ์เพื่อหาค่า', steps: ['หา sin(75°) = sin(45° + 30°)', '= sin(45°)cos(30°) + cos(45°)sin(30°)', '= (√2/2)(√3/2) + (√2/2)(1/2)', '= √6/4 + √2/4 = (√6 + √2)/4'] },
    { type: 'quiz', questions: [
      { question: 'ถ้า sin θ = 3/5 และ θ อยู่ใน quadrant I แล้ว cos θ มีค่าเท่าใด', choices: ['4/5', '3/4', '5/4', '−4/5'], correctIndex: 0, explanation: 'จาก sin²θ + cos²θ = 1: cos²θ = 1 − 9/25 = 16/25 → cos θ = 4/5 (บวก เพราะ quadrant I)' },
      { question: 'cos(2θ) สามารถเขียนในรูปใดได้บ้าง', choices: ['1 − 2sin²θ', '2sinθcosθ', 'sin²θ + cos²θ', '2cos²θ − 1 เท่านั้น'], correctIndex: 0, explanation: 'cos(2θ) = cos²θ − sin²θ = 1 − 2sin²θ = 2cos²θ − 1 ทั้งสามรูปเป็นจริง แต่ "1 − 2sin²θ" คือตัวเลือกที่ถูกต้องในที่นี้' },
    ]},
  ],
}
