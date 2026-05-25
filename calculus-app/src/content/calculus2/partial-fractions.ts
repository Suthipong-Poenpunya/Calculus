import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'partial-fractions',
  title: 'เศษส่วนย่อย (Partial Fractions)',
  course: 'calculus2',
  chapter: 'เทคนิคการอินทิเกรต',
  order: 4,
  estimatedMinutes: 15,
  blocks: [
    { type: 'text', content: 'Partial Fractions สลาย $\\frac{P(x)}{Q(x)}$ (proper fraction, $\\deg P < \\deg Q$) เป็นเศษส่วนย่อยก่อน integrate — linear factor $(x-a)$ → $\\frac{A}{x-a}$; repeated linear $(x-a)^2$ → $\\frac{A}{x-a} + \\frac{B}{(x-a)^2}$ แล้วหาค่า A, B โดยแทนค่าหรือเปรียบเทียบสัมประสิทธิ์' },
    { type: 'equation', tex: '\\dfrac{1}{x^2 - 1} = \\dfrac{A}{x-1} + \\dfrac{B}{x+1}', display: true },
    { type: 'example', title: 'ตัวอย่าง — หา $\\int \\frac{1}{x^2-1}\\,dx$', steps: [
      'สลาย: $\\frac{1}{(x-1)(x+1)} = \\frac{A}{x-1} + \\frac{B}{x+1}$',
      'แทน $x=1$: $A = \\frac{1}{2}$; แทน $x=-1$: $B = -\\frac{1}{2}$',
      '$\\int \\frac{1}{x^2-1}\\,dx = \\frac{1}{2}\\ln|x-1| - \\frac{1}{2}\\ln|x+1| + C = \\frac{1}{2}\\ln\\left|\\frac{x-1}{x+1}\\right| + C$',
    ]},
    { type: 'quiz', questions: [
      { question: '$\\int \\frac{1}{x^2-1}\\,dx$ คืออะไร', choices: ['$\\dfrac{1}{2}\\ln\\left|\\dfrac{x-1}{x+1}\\right| + C$', '$\\ln|x^2-1| + C$', '$\\dfrac{-1}{(x^2-1)^2} + C$', '$\\dfrac{1}{2x} + C$'], correctIndex: 0, explanation: 'Partial fractions: $A=\\frac{1}{2}$, $B=-\\frac{1}{2}$ → integrate แต่ละส่วน' },
      { question: 'Partial Fractions ใช้ได้เมื่อ degree ของ $P(x)$ เทียบกับ $Q(x)$ อย่างไร', choices: ['$\\deg P < \\deg Q$ (proper fraction)', '$\\deg P > \\deg Q$', '$\\deg P = \\deg Q$', 'ใช้ได้ทุกกรณี'], correctIndex: 0, explanation: 'ต้อง proper fraction ($\\deg P < \\deg Q$) — ถ้าไม่ใช่ให้หาร polynomial ก่อน' },
    ]},
  ],
}
