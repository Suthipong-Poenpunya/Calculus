import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'taylor-applications',
  title: 'การประยุกต์ของอนุกรมเทย์เลอร์',
  course: 'calculus2',
  chapter: 'อนุกรมกำลังและอนุกรมเทย์เลอร์',
  order: 19,
  estimatedMinutes: 15,
  blocks: [
    { type: 'text', content: 'Taylor series มีประโยชน์สามด้าน: (1) ประมาณ integral ที่ไม่มี elementary antiderivative — integrate ทีละ term จาก series; (2) คำนวณ limit รูป $0/0$ — cancel terms ที่เป็น 0; (3) ประมาณค่าตัวเลขเช่น $e$, $\\pi$, $\\sin 1$' },
    { type: 'equation', tex: '\\sin x = x - \\dfrac{x^3}{3!} + \\dfrac{x^5}{5!} - \\cdots = \\sum_{n=0}^{\\infty}\\dfrac{(-1)^n x^{2n+1}}{(2n+1)!}', display: true },
    { type: 'example', title: 'ตัวอย่าง — ประมาณ $\\int_0^1 \\frac{\\sin x}{x}\\,dx$', steps: [
      '$\\frac{\\sin x}{x} = 1 - \\frac{x^2}{3!} + \\frac{x^4}{5!} - \\cdots$ (หาร series ของ $\\sin x$ ด้วย $x$)',
      '$\\int_0^1 \\frac{\\sin x}{x}\\,dx = \\left[x - \\frac{x^3}{18} + \\frac{x^5}{600} - \\cdots\\right]_0^1$',
      '$\\approx 1 - \\frac{1}{18} + \\frac{1}{600} \\approx 0.9461$',
    ]},
    { type: 'quiz', questions: [
      { question: 'เหตุใด Taylor series จึงช่วยคำนวณ $\\int_0^1 \\frac{\\sin x}{x}\\,dx$ ได้', choices: ['$\\sin x/x$ ไม่มี antiderivative เป็น elementary function แต่ integrate term-by-term จาก series ได้', 'Taylor series ทำให้ $\\sin x/x = 1$', '$\\int_0^1 \\sin x/x\\,dx = 0$ เสมอ', 'FTC ใช้กับ $\\sin x/x$ โดยตรง'], correctIndex: 0, explanation: '$\\sin x/x$ ไม่มี antiderivative ปิด — แต่ series ของมันคือ power series ที่ integrate ได้ term-by-term' },
      { question: '$\\lim_{x\\to 0} \\frac{\\sin x}{x}$ คำนวณด้วย Taylor series ได้อย่างไร', choices: ['$\\frac{\\sin x}{x} = 1 - \\frac{x^2}{6} + \\cdots \\to 1$ เมื่อ $x\\to 0$', '$\\frac{\\sin x}{x} = \\frac{x}{x} = 1$', '$\\lim_{x\\to 0}\\sin x = 0$ ดังนั้น $0/0$', '$\\sin x/x$ undefined จึงหา limit ไม่ได้'], correctIndex: 0, explanation: 'แทน Maclaurin: $\\frac{\\sin x}{x} = \\frac{x - x^3/6 + \\cdots}{x} = 1 - x^2/6 + \\cdots \\to 1$' },
    ]},
  ],
}
