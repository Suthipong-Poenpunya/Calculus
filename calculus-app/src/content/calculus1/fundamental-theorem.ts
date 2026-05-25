import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'fundamental-theorem',
  title: 'Fundamental Theorem of Calculus',
  course: 'calculus1',
  chapter: 'อินทิกรัลเบื้องต้น',
  order: 17,
  estimatedMinutes: 15,
  blocks: [
    { type: 'text', content: "Fundamental Theorem of Calculus (FTC) เชื่อมอนุพันธ์และอินทิกรัล Part 1: $\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)$ Part 2 (สูตรที่ใช้บ่อยกว่า): $\\int_a^b f(x)\\,dx = F(b) - F(a)$ เมื่อ $F' = f$" },
    { type: 'equation', tex: '\\int_a^b f(x)\\,dx = F(b) - F(a)', display: true },
    { type: 'example', title: 'ตัวอย่าง — คำนวณ Definite Integral ด้วย FTC', steps: [
      'คำนวณ $\\int_1^3(2x + 1)\\,dx$',
      'หา antiderivative: $F(x) = x^2 + x$',
      '$F(3) = 9 + 3 = 12$',
      '$F(1) = 1 + 1 = 2$',
      '$\\int_1^3(2x+1)\\,dx = F(3) - F(1) = 12 - 2 = 10$',
    ]},
    { type: 'quiz', questions: [
      { question: '$\\int_0^2(3x^2)\\,dx$ มีค่าเท่าใด', choices: ['8', '6', '12', '4'], correctIndex: 0, explanation: 'Antiderivative: $F(x) = x^3$ ดังนั้น $F(2) - F(0) = 8 - 0 = 8$' },
      { question: 'FTC Part 2 กล่าวว่าอะไร', choices: ["$\\int_a^b f\\,dx = F(b) - F(a)$ เมื่อ $F' = f$", '$\\frac{d}{dx}\\int f\\,dx = f(x)$', 'definite integral = indefinite integral', '$F(a) - F(b) = \\int_a^b f\\,dx$'], correctIndex: 0, explanation: 'FTC Part 2: หา antiderivative แล้วแทน upper/lower bound — $F(b) - F(a)$' },
    ]},
  ],
}
