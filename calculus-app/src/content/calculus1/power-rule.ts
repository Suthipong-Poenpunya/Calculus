import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'power-rule',
  title: 'Power Rule และอนุพันธ์ฟังก์ชันพื้นฐาน',
  course: 'calculus1',
  chapter: 'อนุพันธ์',
  order: 7,
  estimatedMinutes: 15,
  blocks: [
    { type: 'text', content: "Power Rule: $\\frac{d}{dx}[x^n] = nx^{n-1}$ ใช้ได้กับ n ทุกค่า (จำนวนจริง) กฎ constant: $\\frac{d}{dx}[c] = 0$ กฎ constant multiple: $\\frac{d}{dx}[cf(x)] = cf'(x)$ กฎบวก/ลบ: อนุพันธ์ของผลบวกคือผลบวกของอนุพันธ์" },
    { type: 'equation', tex: '\\dfrac{d}{dx}[x^n] = nx^{n-1}', display: true },
    { type: 'example', title: 'ตัวอย่าง — ใช้ Power Rule', steps: [
      "หา $f'(x)$ ของ $f(x) = 3x^4 - 2x^2 + 5$",
      '$\\frac{d}{dx}[3x^4] = 3 \\cdot 4x^3 = 12x^3$',
      '$\\frac{d}{dx}[-2x^2] = -2 \\cdot 2x = -4x$',
      '$\\frac{d}{dx}[5] = 0$',
      "ดังนั้น $f'(x) = 12x^3 - 4x$",
    ]},
    { type: 'quiz', questions: [
      { question: "ถ้า $f(x) = 5x^3$ แล้ว $f'(x)$ คืออะไร", choices: ['$15x^2$', '$5x^2$', '$15x^3$', '$3x^2$'], correctIndex: 0, explanation: 'Power rule: $\\frac{d}{dx}[5x^3] = 5 \\cdot 3x^2 = 15x^2$' },
      { question: "ถ้า $g(x) = x^4 - 3x + 7$ แล้ว $g'(x)$ คืออะไร", choices: ['$4x^3 - 3$', '$4x^3 + 3$', '$4x^3 - 3x$', '$x^3 - 3$'], correctIndex: 0, explanation: "$\\frac{d}{dx}[x^4] = 4x^3$, $\\frac{d}{dx}[-3x] = -3$, $\\frac{d}{dx}[7] = 0$ รวมได้ $4x^3 - 3$" },
    ]},
  ],
}
