import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'improper-integrals',
  title: 'การอินทิเกรตไม่ตรงแบบ',
  course: 'calculus2',
  chapter: 'เทคนิคการอินทิเกรต',
  order: 5,
  estimatedMinutes: 15,
  blocks: [
    { type: 'text', content: 'Improper integral มีขอบเขตอนันต์หรือ integrand ไม่ต่อเนื่อง นิยามด้วยลิมิต: $\\int_a^\\infty f\\,dx = \\lim_{t\\to\\infty}\\int_a^t f\\,dx$ ถ้าลิมิตมีค่าจำกัดเรียกว่าลู่เข้า (converge) ถ้าไม่มีเรียกว่าลู่ออก (diverge) p-integral: $\\int_1^\\infty \\frac{1}{x^p}\\,dx$ ลู่เข้าเมื่อ $p > 1$' },
    { type: 'equation', tex: '\\int_a^\\infty f(x)\\,dx = \\lim_{t \\to \\infty} \\int_a^t f(x)\\,dx', display: true },
    { type: 'example', title: 'ตัวอย่าง — หา $\\int_1^\\infty \\frac{1}{x^2}\\,dx$', steps: [
      '$= \\lim_{t\\to\\infty}\\int_1^t x^{-2}\\,dx = \\lim_{t\\to\\infty}\\left[-x^{-1}\\right]_1^t$',
      '$= \\lim_{t\\to\\infty}\\left(-\\frac{1}{t} + 1\\right) = 1$',
      'ลู่เข้าหา 1',
    ]},
    { type: 'quiz', questions: [
      { question: '$\\int_1^\\infty \\frac{1}{x^2}\\,dx$ มีค่าเท่าใด', choices: ['1', '0', '$\\infty$', '2'], correctIndex: 0, explanation: '$\\lim_{t\\to\\infty}[-1/x]_1^t = \\lim_{t\\to\\infty}(1-1/t) = 1$' },
      { question: '$\\int_1^\\infty \\frac{1}{x}\\,dx$ ลู่เข้าหรือลู่ออก', choices: ['ลู่ออก (diverges)', 'ลู่เข้าหา 1', 'ลู่เข้าหา 0', 'ลู่เข้าหา $\\ln 2$'], correctIndex: 0, explanation: '$\\lim_{t\\to\\infty}[\\ln x]_1^t = \\lim_{t\\to\\infty}\\ln t = \\infty$ — ลู่ออก; p-integral $p=1$ ไม่ผ่าน' },
    ]},
  ],
}
