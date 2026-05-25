import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'implicit-differentiation',
  title: 'Implicit Differentiation',
  course: 'calculus1',
  chapter: 'กฎการหาอนุพันธ์',
  order: 11,
  estimatedMinutes: 15,
  blocks: [
    { type: 'text', content: 'Implicit differentiation ใช้เมื่อ $y$ แสดงอยู่ใน equation กับ $x$ แต่ไม่ได้ solve หา $y$ โดยตรง — แยกอนุพันธ์ทั้งสองข้างเทียบ $x$ แล้ว solve หา $\\frac{dy}{dx}$ ทุกครั้งที่แยก $y$ ต้องคูณ $\\frac{dy}{dx}$ (chain rule)' },
    { type: 'equation', tex: 'x^2 + y^2 = r^2 \\Rightarrow 2x + 2y\\dfrac{dy}{dx} = 0', display: true },
    { type: 'example', title: 'ตัวอย่าง — Implicit Differentiation', steps: [
      'หา $\\frac{dy}{dx}$ ของ $x^2 + y^2 = 25$',
      'แยกอนุพันธ์ทั้งสองข้างเทียบ $x$: $\\frac{d}{dx}[x^2] + \\frac{d}{dx}[y^2] = 0$',
      '$2x + 2y\\frac{dy}{dx} = 0$',
      'Solve: $\\frac{dy}{dx} = -\\frac{x}{y}$',
    ]},
    { type: 'quiz', questions: [
      { question: 'ถ้า $x^2 + y^2 = 16$ แล้ว $\\frac{dy}{dx}$ คืออะไร', choices: ['$-\\dfrac{x}{y}$', '$\\dfrac{x}{y}$', '$-\\dfrac{y}{x}$', '$2x + 2y$'], correctIndex: 0, explanation: '$2x + 2y\\frac{dy}{dx} = 0 \\Rightarrow \\frac{dy}{dx} = -\\frac{x}{y}$' },
      { question: 'เหตุใดเมื่อแยกอนุพันธ์ $y^2$ เทียบ $x$ จึงได้ $2y\\frac{dy}{dx}$', choices: ['Chain rule: $y$ เป็นฟังก์ชันของ $x$', 'Power rule เท่านั้น', '$y$ คือค่าคงที่', 'Implicit rule พิเศษ'], correctIndex: 0, explanation: 'เราถือว่า $y = y(x)$ — ดังนั้น $\\frac{d}{dx}[y^2] = 2y \\cdot \\frac{dy}{dx}$ (chain rule)' },
    ]},
  ],
}
