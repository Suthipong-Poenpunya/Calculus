import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'riemann-sum',
  title: 'Riemann Sum และ Definite Integral',
  course: 'calculus1',
  chapter: 'อินทิกรัลเบื้องต้น',
  order: 16,
  estimatedMinutes: 15,
  blocks: [
    { type: 'text', content: 'Definite integral $\\int_a^b f(x)\\,dx$ คือพื้นที่ (มีเครื่องหมาย) ใต้กราฟ $f$ จาก $a$ ถึง $b$ นิยามจาก Riemann sum: แบ่ง $[a,b]$ เป็น $n$ ช่วง แต่ละช่วงกว้าง $\\Delta x = \\frac{b-a}{n}$ แล้วหาลิมิตของผลรวมสี่เหลี่ยม' },
    { type: 'equation', tex: '\\int_a^b f(x)\\,dx = \\lim_{n\\to\\infty}\\sum_{i=1}^n f(x_i^*)\\,\\Delta x', display: true },
    { type: 'example', title: 'ตัวอย่าง — Left Riemann Sum', steps: [
      'ประมาณ $\\int_0^2 x^2\\,dx$ ด้วย 4 สี่เหลี่ยม (left endpoint)',
      '$\\Delta x = \\frac{2-0}{4} = 0.5$; left endpoints: $x = 0, 0.5, 1, 1.5$',
      'ความสูง: $f(0) = 0$, $f(0.5) = 0.25$, $f(1) = 1$, $f(1.5) = 2.25$',
      'ผลรวม: $(0 + 0.25 + 1 + 2.25)(0.5) = 3.5 \\times 0.5 = 1.75$',
      'ค่าจริง: $\\int_0^2 x^2\\,dx = 8/3 \\approx 2.67$',
    ]},
    { type: 'quiz', questions: [
      { question: '$\\Delta x$ ใน Riemann sum เมื่อ $\\int_1^5 f(x)\\,dx$ กับ $n=4$ มีค่าเท่าใด', choices: ['1', '0.5', '2', '4'], correctIndex: 0, explanation: '$\\Delta x = \\frac{b-a}{n} = \\frac{5-1}{4} = 1$' },
      { question: 'Definite integral $\\int_a^b f(x)\\,dx$ มีความหมายทางเรขาคณิตว่าอะไร', choices: ['พื้นที่ (มีเครื่องหมาย) ใต้กราฟ $f$ จาก $a$ ถึง $b$', 'ความยาวของกราฟ $f$', 'Antiderivative ของ $f$', 'อัตราการเปลี่ยนแปลงเฉลี่ยของ $f$'], correctIndex: 0, explanation: 'Definite integral = พื้นที่สุทธิ (พื้นที่เหนือแกน $x$ ลบด้วยพื้นที่ใต้แกน $x$)' },
    ]},
  ],
}
