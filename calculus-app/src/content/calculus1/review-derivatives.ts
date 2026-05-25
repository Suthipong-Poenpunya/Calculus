import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'review-derivatives',
  title: 'แบบฝึกหัดท้ายบท — อนุพันธ์',
  course: 'calculus1',
  chapter: 'อนุพันธ์',
  order: 999,
  estimatedMinutes: 15,
  isChapterReview: true,
  blocks: [
    { type: 'text', content: 'ทบทวนความรู้เรื่องอนุพันธ์ — เลือกคำตอบที่ถูกต้องที่สุดในแต่ละข้อ' },
    { type: 'quiz', questions: [
      { question: "นิยามของอนุพันธ์ $f'(x)$ คืออะไร", choices: ['$\\lim_{h\\to 0}\\frac{f(x+h)-f(x)}{h}$', '$\\frac{f(x+1)-f(x)}{1}$', '$\\lim_{x\\to 0}\\frac{f(x+h)-f(x)}{h}$', '$f(x) \\cdot h$'], correctIndex: 0, explanation: 'อนุพันธ์นิยามจาก difference quotient เมื่อ $h \\to 0$', lessonId: 'derivative-definition' },
      { question: "ถ้า $f(x) = x^3$ แล้ว $f'(2)$ มีค่าเท่าใด", choices: ['12', '8', '6', '4'], correctIndex: 0, explanation: "$f'(x) = 3x^2$ ดังนั้น $f'(2) = 3(4) = 12$", lessonId: 'derivative-definition' },
      { question: 'ความชันเส้นสัมผัสของ $f(x) = x^2 + 3$ ที่ $x = 2$ คือเท่าใด', choices: ['4', '7', '2', '8'], correctIndex: 0, explanation: "$f'(x) = 2x$ ดังนั้นความชัน $= f'(2) = 4$", lessonId: 'tangent-slope' },
      { question: 'สมการเส้นสัมผัสของ $f(x) = x^2$ ที่ $(3, 9)$ คืออะไร', choices: ['$y = 6x - 9$', '$y = 6x + 9$', '$y = 3x - 9$', '$y = 9x - 6$'], correctIndex: 0, explanation: "$f'(3) = 6$ — สมการ: $y - 9 = 6(x - 3)$ คือ $y = 6x - 9$", lessonId: 'tangent-slope' },
      { question: "ถ้า $h(x) = x^5$ แล้ว $h'(x)$ คืออะไร", choices: ['$5x^4$', '$x^4$', '$5x^5$', '$4x^5$'], correctIndex: 0, explanation: 'Power rule: $\\frac{d}{dx}[x^5] = 5x^4$', lessonId: 'power-rule' },
      { question: "ถ้า $f(x) = 4x^3 - 6x + 2$ แล้ว $f'(x)$ คืออะไร", choices: ['$12x^2 - 6$', '$12x^2 + 6$', '$4x^2 - 6$', '$12x^3 - 6$'], correctIndex: 0, explanation: "$\\frac{d}{dx}[4x^3] = 12x^2$, $\\frac{d}{dx}[-6x] = -6$, $\\frac{d}{dx}[2] = 0$", lessonId: 'power-rule' },
      { question: 'อนุพันธ์ของ $f(x) = 7$ (ค่าคงที่) คืออะไร', choices: ['0', '7', '1', 'ไม่มีอยู่'], correctIndex: 0, explanation: 'อนุพันธ์ของค่าคงที่เสมอเป็น 0 เพราะไม่มีการเปลี่ยนแปลง', lessonId: 'power-rule' },
      { question: "$f'(x)$ แทนสิ่งใดในแง่กราฟ", choices: ['ความชันของเส้นสัมผัส', 'ความชันของ secant line', 'พื้นที่ใต้กราฟ', 'ค่า $y$-intercept'], correctIndex: 0, explanation: "$f'(a)$ คือความชันของ tangent line ที่จุด $(a, f(a))$", lessonId: 'tangent-slope' },
    ]},
  ],
}
