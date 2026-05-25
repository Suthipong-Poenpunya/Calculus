import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'derivative-definition',
  title: 'นิยามของอนุพันธ์',
  course: 'calculus1',
  chapter: 'อนุพันธ์',
  order: 5,
  estimatedMinutes: 15,
  blocks: [
    { type: 'text', content: "อนุพันธ์ (Derivative) ของฟังก์ชัน f ที่จุด x นิยามจากลิมิตของ difference quotient — วัดอัตราการเปลี่ยนแปลงทันที (instantaneous rate of change) ของฟังก์ชัน notation: $f'(x)$, $\\frac{dy}{dx}$, $Df(x)$" },
    { type: 'equation', tex: "f'(x) = \\lim_{h \\to 0} \\dfrac{f(x+h)-f(x)}{h}", display: true },
    { type: 'example', title: 'ตัวอย่าง — หาอนุพันธ์โดยนิยาม', steps: [
      "หา $f'(x)$ ของ $f(x) = x^2$",
      'แทนลง difference quotient: $\\frac{(x+h)^2 - x^2}{h} = \\frac{x^2+2xh+h^2-x^2}{h} = \\frac{2xh+h^2}{h}$',
      'ตัด $h$: $= 2x + h$',
      'หาลิมิต: $\\lim_{h\\to 0}(2x+h) = 2x$',
      "ดังนั้น $f'(x) = 2x$",
    ]},
    { type: 'quiz', questions: [
      { question: "ถ้า $f(x) = x^2$ แล้ว $f'(3)$ มีค่าเท่าใด", choices: ['6', '9', '3', '12'], correctIndex: 0, explanation: "$f'(x) = 2x$ ดังนั้น $f'(3) = 2(3) = 6$" },
      { question: "อนุพันธ์ $f'(x)$ วัดสิ่งใด", choices: ['อัตราการเปลี่ยนแปลงทันทีของ $f$', 'ค่าเฉลี่ยของ $f$ บน interval', 'พื้นที่ใต้กราฟของ $f$', 'จุดสูงสุดของ $f$'], correctIndex: 0, explanation: 'อนุพันธ์วัด instantaneous rate of change — ความชันของกราฟ ณ จุดนั้น' },
    ]},
  ],
}
