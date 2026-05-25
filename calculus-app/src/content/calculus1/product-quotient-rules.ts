import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'product-quotient-rules',
  title: 'กฎผลคูณและกฎผลหาร',
  course: 'calculus1',
  chapter: 'กฎการหาอนุพันธ์',
  order: 8,
  estimatedMinutes: 15,
  blocks: [
    { type: 'text', content: "กฎผลคูณ (Product Rule): ถ้า $h(x) = f(x)g(x)$ แล้ว $h'(x) = f'(x)g(x) + f(x)g'(x)$ — \"อนุพันธ์ตัวแรกคูณตัวหลัง + ตัวแรกคูณอนุพันธ์ตัวหลัง\" กฎผลหาร (Quotient Rule): $\\left(\\frac{f}{g}\\right)' = \\frac{f'g - fg'}{g^2}$" },
    { type: 'equation', tex: "(fg)' = f'g + fg'", display: true },
    { type: 'example', title: 'ตัวอย่าง — กฎผลคูณ', steps: [
      'หา $\\frac{d}{dx}[(x^2)(\\sin x)]$',
      'ให้ $f(x) = x^2$, $g(x) = \\sin x$',
      "$f'(x) = 2x$, $g'(x) = \\cos x$",
      'Product rule: $2x \\cdot \\sin x + x^2 \\cdot \\cos x$',
      'ดังนั้น $= 2x\\sin x + x^2\\cos x$',
    ]},
    { type: 'quiz', questions: [
      { question: "หา $(fg)'$ เมื่อ $f(x) = x^3$ และ $g(x) = x^2$", choices: ['$5x^4$', '$6x^4$', '$x^5$', '$3x^2 + 2x$'], correctIndex: 0, explanation: 'Product rule: $3x^2 \\cdot x^2 + x^3 \\cdot 2x = 3x^4 + 2x^4 = 5x^4$' },
      { question: "Quotient rule: $\\left(\\frac{f}{g}\\right)'$ คือข้อใด", choices: ["$\\dfrac{f'g - fg'}{g^2}$", "$\\dfrac{f'g + fg'}{g^2}$", "$\\dfrac{fg' - f'g}{g^2}$", "$f'g - fg'$"], correctIndex: 0, explanation: '"Lo d-Hi minus Hi d-Lo over Lo-squared" — $\\frac{g \\cdot f\' - f \\cdot g\'}{g^2}$' },
    ]},
  ],
}
