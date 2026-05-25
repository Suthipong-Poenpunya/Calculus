import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'review-differentiation-rules',
  title: 'แบบฝึกหัดท้ายบท — กฎการหาอนุพันธ์',
  course: 'calculus1',
  chapter: 'กฎการหาอนุพันธ์',
  order: 999,
  estimatedMinutes: 15,
  isChapterReview: true,
  blocks: [
    { type: 'text', content: 'ทบทวนความรู้เรื่องกฎการหาอนุพันธ์ — เลือกคำตอบที่ถูกต้องที่สุดในแต่ละข้อ' },
    { type: 'quiz', questions: [
      { question: 'หา $\\frac{d}{dx}[(x^2)(x^3)]$ โดยใช้ product rule', choices: ['$5x^4$', '$6x^4$', '$2x + 3x^2$', '$x^5$'], correctIndex: 0, explanation: 'Product rule: $2x \\cdot x^3 + x^2 \\cdot 3x^2 = 2x^4 + 3x^4 = 5x^4$', lessonId: 'product-quotient-rules' },
      { question: "Quotient rule: $\\left(\\frac{x^2}{x+1}\\right)'$ คืออะไร", choices: ['$\\dfrac{2x(x+1) - x^2}{(x+1)^2}$', '$\\dfrac{x^2 + 2x}{(x+1)^2}$', '$\\dfrac{2x}{x+1}$', '$\\dfrac{x^2 - 2x}{(x+1)^2}$'], correctIndex: 0, explanation: "Quotient rule: $\\frac{f'g - fg'}{g^2} = \\frac{2x(x+1) - x^2(1)}{(x+1)^2}$", lessonId: 'product-quotient-rules' },
      { question: 'หา $\\frac{d}{dx}[\\sin(x^2)]$ โดยใช้ chain rule', choices: ['$2x\\cos(x^2)$', '$\\cos(x^2)$', '$2\\cos(x^2)$', '$-2x\\cos(x^2)$'], correctIndex: 0, explanation: 'Outer: $\\cos(u)$, inner: $2x$ — chain rule: $\\cos(x^2) \\cdot 2x$', lessonId: 'chain-rule' },
      { question: 'หา $\\frac{d}{dx}[(x^3 - 2)^4]$', choices: ['$12x^2(x^3-2)^3$', '$4(x^3-2)^3$', '$4x^2(x^3-2)^3$', '$3x^2(x^3-2)^4$'], correctIndex: 0, explanation: 'Outer: $4u^3$, inner: $3x^2$ — chain rule: $4(x^3-2)^3 \\cdot 3x^2 = 12x^2(x^3-2)^3$', lessonId: 'chain-rule' },
      { question: '$\\frac{d}{dx}[\\sin x]$ คืออะไร', choices: ['$\\cos x$', '$-\\cos x$', '$-\\sin x$', '$\\sec^2 x$'], correctIndex: 0, explanation: '$\\frac{d}{dx}[\\sin x] = \\cos x$ — สูตรพื้นฐาน', lessonId: 'trig-derivatives' },
      { question: '$\\frac{d}{dx}[\\cos(2x)]$ คืออะไร', choices: ['$-2\\sin(2x)$', '$2\\sin(2x)$', '$-\\sin(2x)$', '$2\\cos(2x)$'], correctIndex: 0, explanation: 'Outer: $-\\sin(u)$, inner: $2$ — chain rule: $-\\sin(2x) \\cdot 2 = -2\\sin(2x)$', lessonId: 'trig-derivatives' },
      { question: 'หา $\\frac{dy}{dx}$ ของ $x^3 + y^3 = 8$', choices: ['$-\\dfrac{x^2}{y^2}$', '$\\dfrac{x^2}{y^2}$', '$-\\dfrac{y^2}{x^2}$', '$3x^2 + 3y^2$'], correctIndex: 0, explanation: '$3x^2 + 3y^2\\frac{dy}{dx} = 0 \\Rightarrow \\frac{dy}{dx} = -\\frac{x^2}{y^2}$', lessonId: 'implicit-differentiation' },
      { question: 'Implicit differentiation ต่างจาก explicit differentiation อย่างไร', choices: ['ใช้เมื่อ $y$ ไม่ได้ solve แยกออกมาจาก equation', 'ใช้เมื่อ $x$ และ $y$ อยู่คนละข้าง', 'ใช้เมื่อฟังก์ชันเป็น polynomial', 'ไม่ต่างกัน เพียงแต่ชื่อต่างกัน'], correctIndex: 0, explanation: 'Implicit diff ใช้เมื่อ equation มีทั้ง $x$ และ $y$ ปนกัน โดยไม่ได้ isolate $y$', lessonId: 'implicit-differentiation' },
    ]},
  ],
}
