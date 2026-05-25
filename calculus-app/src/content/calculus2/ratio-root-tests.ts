import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'ratio-root-tests',
  title: 'Ratio Test และ Root Test',
  course: 'calculus2',
  chapter: 'ลำดับและอนุกรม',
  order: 14,
  estimatedMinutes: 15,
  blocks: [
    { type: 'text', content: 'Ratio Test: $L = \\lim_{n\\to\\infty}|a_{n+1}/a_n|$ — $L<1$ ลู่เข้าสัมบูรณ์, $L>1$ ลู่ออก, $L=1$ inconclusive; Root Test: $L = \\lim_{n\\to\\infty}|a_n|^{1/n}$ — กฎเดียวกัน; Ratio Test เหมาะกับ $n!$ และ $r^n$; Root Test เหมาะกับ $(b_n)^n$' },
    { type: 'equation', tex: 'L = \\lim_{n\\to\\infty}\\left|\\dfrac{a_{n+1}}{a_n}\\right|', display: true },
    { type: 'example', title: 'ตัวอย่าง — ทดสอบ $\\sum \\frac{n!}{n^n}$ ด้วย Ratio Test', steps: [
      '$\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{(n+1)!/(n+1)^{n+1}}{n!/n^n} = \\frac{n^n}{(n+1)^n} = \\left(\\frac{n}{n+1}\\right)^n$',
      '$\\lim_{n\\to\\infty}\\left(\\frac{n}{n+1}\\right)^n = \\lim_{n\\to\\infty}\\left(1-\\frac{1}{n+1}\\right)^n = \\frac{1}{e} < 1$',
      'ดังนั้น $\\sum \\frac{n!}{n^n}$ ลู่เข้าสัมบูรณ์',
    ]},
    { type: 'quiz', questions: [
      { question: 'Ratio Test: ถ้า $L = \\lim|a_{n+1}/a_n| < 1$ แล้วอนุกรมเป็นอย่างไร', choices: ['ลู่เข้าสัมบูรณ์', 'ลู่ออก', 'ลู่เข้าแบบ conditional', 'inconclusive'], correctIndex: 0, explanation: '$L < 1 \\Rightarrow$ Absolute convergence; $L > 1 \\Rightarrow$ diverge; $L = 1 \\Rightarrow$ inconclusive' },
      { question: 'Ratio Test และ Root Test inconclusive เมื่อ $L = ?$', choices: ['$L = 1$', '$L = 0$', '$L > 1$', '$L < 1$'], correctIndex: 0, explanation: 'เมื่อ $L = 1$ ทั้งสอง test ไม่สามารถตัดสินได้ ต้องใช้ test อื่น เช่น Integral Test หรือ Comparison Test' },
    ]},
  ],
}
