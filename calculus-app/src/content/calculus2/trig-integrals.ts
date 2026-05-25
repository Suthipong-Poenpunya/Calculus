import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'trig-integrals',
  title: 'การอินทิเกรตฟังก์ชันตรีโกณมิติ',
  course: 'calculus2',
  chapter: 'เทคนิคการอินทิเกรต',
  order: 2,
  estimatedMinutes: 15,
  blocks: [
    { type: 'text', content: 'สำหรับ $\\int \\sin^n x \\cos^m x\\,dx$ — ถ้า power เป็นเลขคี่ให้แยกหนึ่งตัวแล้วใช้ Pythagorean identity; ถ้า power เป็นเลขคู่ให้ใช้ half-angle formulas: $\\sin^2 x = \\frac{1-\\cos 2x}{2}$ และ $\\cos^2 x = \\frac{1+\\cos 2x}{2}$' },
    { type: 'equation', tex: '\\sin^2 x = \\dfrac{1 - \\cos 2x}{2}', display: true },
    { type: 'example', title: 'ตัวอย่าง — หา $\\int \\sin^2 x\\,dx$', steps: [
      'แทน $\\sin^2 x = \\frac{1-\\cos 2x}{2}$',
      '$\\int \\frac{1-\\cos 2x}{2}\\,dx = \\frac{x}{2} - \\frac{\\sin 2x}{4} + C$',
    ]},
    { type: 'quiz', questions: [
      { question: '$\\int \\sin^2 x\\,dx$ คืออะไร', choices: ['$\\dfrac{x}{2} - \\dfrac{\\sin 2x}{4} + C$', '$-\\cos^2 x + C$', '$\\dfrac{\\sin^2 x}{2} + C$', '$x - \\sin 2x + C$'], correctIndex: 0, explanation: 'ใช้ $\\sin^2 x = \\frac{1-\\cos 2x}{2}$ แล้ว integrate: $\\frac{x}{2} - \\frac{\\sin 2x}{4} + C$' },
      { question: 'เมื่อ power ของ $\\cos x$ เป็นเลขคี่ใน $\\int \\sin^n x \\cos^m x\\,dx$ ควรทำอย่างไร', choices: ['แยก $\\cos x$ หนึ่งตัว แทน $\\cos^2 x = 1 - \\sin^2 x$ แล้ว sub $u = \\sin x$', 'ใช้ half-angle formula $\\cos^2 x = \\frac{1+\\cos 2x}{2}$', 'ใช้ IBP โดยให้ $u = \\cos^m x$', 'แทน $x = \\pi/2 - t$'], correctIndex: 0, explanation: 'แยก $\\cos x$ ตัวเดียวไว้, แปลง $\\cos^{m-1} x$ ด้วย $1-\\sin^2 x$, แล้ว sub $u=\\sin x$ ให้ $\\cos x\\,dx = du$' },
    ]},
  ],
}
