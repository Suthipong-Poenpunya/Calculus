import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'taylor-maclaurin',
  title: 'อนุกรมเทย์เลอร์และแมคลอริน',
  course: 'calculus2',
  chapter: 'อนุกรมกำลังและอนุกรมเทย์เลอร์',
  order: 18,
  estimatedMinutes: 15,
  blocks: [
    { type: 'text', content: 'Taylor series ของ $f$ centered ที่ $a$: $f(x) = \\sum_{n=0}^\\infty \\frac{f^{(n)}(a)}{n!}(x-a)^n$; Maclaurin series คือ Taylor ที่ $a=0$; series สำคัญ: $e^x = \\sum x^n/n!$, $\\sin x = \\sum \\frac{(-1)^n x^{2n+1}}{(2n+1)!}$, $\\cos x = \\sum \\frac{(-1)^n x^{2n}}{(2n)!}$' },
    { type: 'equation', tex: 'f(x) = \\sum_{n=0}^{\\infty} \\dfrac{f^{(n)}(a)}{n!}(x-a)^n', display: true },
    { type: 'example', title: 'ตัวอย่าง — หา Maclaurin series ของ $e^x$', steps: [
      '$f^{(n)}(x) = e^x$ สำหรับทุก $n$ → $f^{(n)}(0) = 1$',
      '$e^x = \\sum_{n=0}^\\infty \\frac{1}{n!}x^n = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots$',
      'ลู่เข้าทุก $x$ (Ratio Test: $L = |x|/(n+1) \\to 0$)',
    ]},
    { type: 'quiz', questions: [
      { question: 'Maclaurin series ของ $e^x$ คืออะไร', choices: ['$\\sum_{n=0}^\\infty \\dfrac{x^n}{n!}$', '$\\sum_{n=0}^\\infty \\dfrac{x^n}{n}$', '$\\sum_{n=0}^\\infty x^n$', '$\\sum_{n=0}^\\infty \\dfrac{(-1)^n x^n}{n!}$'], correctIndex: 0, explanation: '$f^{(n)}(0) = 1$ สำหรับทุก $n$ → $e^x = \\sum x^n/n!$' },
      { question: 'Taylor series centered ที่ $a = 0$ เรียกว่าอะไร', choices: ['Maclaurin series', 'Laurent series', 'Fourier series', 'Power series ธรรมดา'], correctIndex: 0, explanation: 'Maclaurin series คือ Taylor series พิเศษที่ centered ที่ $a=0$' },
    ]},
  ],
}
