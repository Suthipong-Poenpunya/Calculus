import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'integration-by-parts',
  title: 'การอินทิเกรตโดยส่วน',
  course: 'calculus2',
  chapter: 'เทคนิคการอินทิเกรต',
  order: 1,
  estimatedMinutes: 15,
  blocks: [
    { type: 'text', content: 'Integration by Parts ใช้สูตร $\\int u\\,dv = uv - \\int v\\,du$ เหมาะกับอินทิแกรนด์ที่เป็นผลคูณของสองฟังก์ชัน หลักเลือก $u$ ใช้ LIATE: Logarithm → Inverse trig → Algebraic → Trig → Exponential โดยเลือกฟังก์ชันที่อยู่ก่อนในลำดับเป็น $u$' },
    { type: 'equation', tex: '\\int u\\,dv = uv - \\int v\\,du', display: true },
    { type: 'example', title: 'ตัวอย่าง — หา $\\int xe^x\\,dx$', steps: [
      'ให้ $u = x$ (Algebraic), $dv = e^x\\,dx$ (Exponential)',
      '$du = dx$, $v = e^x$',
      '$\\int xe^x\\,dx = xe^x - \\int e^x\\,dx = xe^x - e^x + C$',
    ]},
    { type: 'quiz', questions: [
      { question: '$\\int xe^x\\,dx$ คืออะไร', choices: ['$xe^x - e^x + C$', '$xe^x + C$', '$e^x + C$', '$\\frac{x^2}{2}e^x + C$'], correctIndex: 0, explanation: 'IBP: $u=x$, $dv=e^x\\,dx$ → $xe^x - \\int e^x\\,dx = xe^x - e^x + C$' },
      { question: 'ตาม LIATE ควรเลือกฟังก์ชันชนิดใดเป็น $u$ ก่อน', choices: ['Logarithm', 'Exponential', 'Trigonometric', 'Algebraic'], correctIndex: 0, explanation: 'LIATE: Logarithm มีลำดับสูงสุด — เลือกเป็น $u$ ก่อนเสมอ เพราะ derivative ของ $\\ln$ ง่ายกว่า antiderivative' },
    ]},
  ],
}
