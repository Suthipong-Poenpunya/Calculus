import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'alternating-series',
  title: 'อนุกรมสลับเครื่องหมายและการลู่เข้าสัมบูรณ์',
  course: 'calculus2',
  chapter: 'ลำดับและอนุกรม',
  order: 15,
  estimatedMinutes: 15,
  blocks: [
    { type: 'text', content: 'Alternating Series Test (Leibniz): $\\sum(-1)^{n+1}b_n$ ลู่เข้าถ้า $b_n$ ลดลงและ $\\lim b_n = 0$; Absolute convergence: $\\sum|a_n|$ ลู่เข้า → $\\sum a_n$ ลู่เข้า; Conditional convergence: $\\sum a_n$ ลู่เข้าแต่ $\\sum|a_n|$ ลู่ออก' },
    { type: 'equation', tex: '\\sum_{n=1}^{\\infty} (-1)^{n+1} b_n \\text{ ลู่เข้าถ้า } b_n \\downarrow \\text{ และ } \\lim b_n = 0', display: true },
    { type: 'example', title: 'ตัวอย่าง — $\\sum_{n=1}^\\infty \\frac{(-1)^{n+1}}{n}$ ลู่เข้าแบบ conditional', steps: [
      'Alternating Series Test: $b_n = 1/n$ ลดลงและ $\\lim 1/n = 0$ → ลู่เข้า',
      'แต่ $\\sum |(-1)^{n+1}/n| = \\sum 1/n$ (Harmonic) → ลู่ออก',
      'ดังนั้น $\\sum(-1)^{n+1}/n$ ลู่เข้าแบบ conditional (ไม่ absolute)',
    ]},
    { type: 'quiz', questions: [
      { question: '$\\sum_{n=1}^\\infty \\frac{(-1)^{n+1}}{n}$ ลู่เข้าหรือลู่ออก', choices: ['ลู่เข้าแบบ conditional', 'ลู่เข้าสัมบูรณ์', 'ลู่ออก', 'ไม่สามารถบอกได้'], correctIndex: 0, explanation: 'AST: $1/n$ ลดลง → 0 → ลู่เข้า; แต่ $\\sum 1/n$ ลู่ออก → conditional convergence' },
      { question: 'Absolute convergence หมายความว่าอะไร', choices: ['$\\sum |a_n|$ ลู่เข้า', '$\\sum a_n$ ลู่เข้าและ $a_n > 0$ ทุกตัว', '$|a_n|$ ลดลงเสมอ', 'ลู่เข้าเฉพาะบาง $n$'], correctIndex: 0, explanation: 'Absolute convergence: $\\sum|a_n|$ ลู่เข้า — เข้มงวดกว่า conditional convergence' },
    ]},
  ],
}
