import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'convergence-interval',
  title: 'รัศมีและช่วงการลู่เข้า',
  course: 'calculus2',
  chapter: 'อนุกรมกำลังและอนุกรมเทย์เลอร์',
  order: 17,
  estimatedMinutes: 15,
  blocks: [
    { type: 'text', content: 'Radius of convergence $R$: power series ลู่เข้าเมื่อ $|x-a|<R$ ลู่ออกเมื่อ $|x-a|>R$ — หาได้จาก Ratio Test; ต้องตรวจสอบ endpoints $x = a\\pm R$ แยกต่างหากเพราะ Ratio Test inconclusive ที่ $L=1$; ถ้า $R=\\infty$: ลู่เข้าทุก $x$; ถ้า $R=0$: ลู่เข้าเฉพาะที่ $x=a$' },
    { type: 'equation', tex: 'R = \\lim_{n\\to\\infty}\\left|\\dfrac{c_n}{c_{n+1}}\\right|', display: true },
    { type: 'example', title: 'ตัวอย่าง — หา interval of convergence ของ $\\sum \\frac{x^n}{n}$', steps: [
      'Ratio Test: $\\lim\\left|\\frac{x^{n+1}/(n+1)}{x^n/n}\\right| = |x|\\cdot\\frac{n}{n+1} \\to |x|$',
      'ลู่เข้าเมื่อ $|x| < 1$ → $R = 1$',
      'ตรวจ $x=1$: $\\sum 1/n$ (Harmonic) → ลู่ออก',
      'ตรวจ $x=-1$: $\\sum (-1)^n/n$ (Alternating Harmonic) → ลู่เข้า',
      'Interval of convergence: $[-1, 1)$',
    ]},
    { type: 'quiz', questions: [
      { question: 'Interval of convergence ของ $\\sum \\frac{x^n}{n}$ คือข้อใด', choices: ['$[-1, 1)$', '$(-1, 1)$', '$[-1, 1]$', '$(-1, 1]$'], correctIndex: 0, explanation: '$R=1$; $x=-1$ ลู่เข้า (AST), $x=1$ ลู่ออก (Harmonic) → $[-1,1)$' },
      { question: 'เหตุใดจึงต้องตรวจสอบ endpoints แยกต่างหาก', choices: ['Ratio Test inconclusive ที่ $|x-a| = R$ (ได้ $L=1$)', 'Endpoints อยู่นอก domain ของ power series', 'Power series ไม่นิยามที่ endpoints', 'Ratio Test ไม่ทำงานสำหรับ $x$ จริง'], correctIndex: 0, explanation: 'ที่ endpoints Ratio Test ให้ $L=1$ → ต้องใช้ test อื่น (AST, p-series, Divergence Test)' },
    ]},
  ],
}
