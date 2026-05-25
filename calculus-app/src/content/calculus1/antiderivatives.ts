import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'antiderivatives',
  title: 'Antiderivatives และ Indefinite Integral',
  course: 'calculus1',
  chapter: 'อินทิกรัลเบื้องต้น',
  order: 15,
  estimatedMinutes: 15,
  blocks: [
    { type: 'text', content: "Antiderivative ของ $f$ คือฟังก์ชัน $F$ ที่ $F'(x) = f(x)$ Indefinite integral เขียน $\\int f(x)\\,dx = F(x) + C$ โดย $C$ คือ constant of integration Power rule for integrals: $\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C$ (เมื่อ $n \\neq -1$)" },
    { type: 'equation', tex: '\\int x^n\\,dx = \\dfrac{x^{n+1}}{n+1} + C', display: true },
    { type: 'example', title: 'ตัวอย่าง — Indefinite Integral', steps: [
      'หา $\\int(3x^2 - 2x + 1)\\,dx$',
      '$\\int 3x^2\\,dx = 3 \\cdot \\frac{x^3}{3} = x^3$',
      '$\\int -2x\\,dx = -2 \\cdot \\frac{x^2}{2} = -x^2$',
      '$\\int 1\\,dx = x$',
      'รวม: $x^3 - x^2 + x + C$',
    ]},
    { type: 'quiz', questions: [
      { question: '$\\int 4x^3\\,dx$ คืออะไร', choices: ['$x^4 + C$', '$4x^4 + C$', '$12x^2 + C$', '$x^3 + C$'], correctIndex: 0, explanation: '$\\int 4x^3\\,dx = 4 \\cdot \\frac{x^4}{4} + C = x^4 + C$' },
      { question: 'เหตุใดจึงต้องเติม $+C$ ใน antiderivative', choices: ['เพราะ antiderivative ไม่ unique — ฟังก์ชันที่ต่างกันด้วยค่าคงที่มีอนุพันธ์เท่ากัน', 'เพราะ $C$ คืออนุพันธ์ของ constant', 'เพราะทุก integration ต้องมีค่าคงที่', 'เพราะ Power rule กำหนดให้เติม $C$'], correctIndex: 0, explanation: "ถ้า $F'(x) = f(x)$ แล้ว $(F + C)' = f(x)$ ด้วย สำหรับ $C$ ทุกค่า ดังนั้น antiderivative ไม่ unique" },
    ]},
  ],
}
