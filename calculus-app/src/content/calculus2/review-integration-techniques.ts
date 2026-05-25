import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'review-integration-techniques',
  title: 'แบบฝึกหัดท้ายบท — เทคนิคการอินทิเกรต',
  course: 'calculus2',
  chapter: 'เทคนิคการอินทิเกรต',
  order: 999,
  estimatedMinutes: 15,
  isChapterReview: true,
  blocks: [
    { type: 'text', content: 'ทบทวนเทคนิคการอินทิเกรต — เลือกคำตอบที่ถูกต้องที่สุดในแต่ละข้อ' },
    { type: 'quiz', questions: [
      { question: '$\\int xe^x\\,dx$ คืออะไร', choices: ['$xe^x - e^x + C$', '$xe^x + C$', '$\\frac{x^2}{2}e^x + C$', '$e^x + C$'], correctIndex: 0, explanation: 'IBP: $u=x$, $dv=e^x\\,dx$ → $xe^x - e^x + C$', lessonId: 'integration-by-parts' },
      { question: '$\\int x\\cos x\\,dx$ คืออะไร', choices: ['$x\\sin x + \\cos x + C$', '$x\\sin x - \\cos x + C$', '$\\sin x + C$', '$x\\cos x + \\sin x + C$'], correctIndex: 0, explanation: 'IBP: $u=x$, $dv=\\cos x\\,dx$ → $x\\sin x - \\int \\sin x\\,dx = x\\sin x + \\cos x + C$', lessonId: 'integration-by-parts' },
      { question: '$\\int \\cos^2 x\\,dx$ คืออะไร', choices: ['$\\dfrac{x}{2} + \\dfrac{\\sin 2x}{4} + C$', '$\\dfrac{x}{2} - \\dfrac{\\sin 2x}{4} + C$', '$\\sin x\\cos x + C$', '$\\dfrac{\\cos^2 x}{2} + C$'], correctIndex: 0, explanation: 'ใช้ $\\cos^2 x = \\frac{1+\\cos 2x}{2}$ → $\\frac{x}{2} + \\frac{\\sin 2x}{4} + C$', lessonId: 'trig-integrals' },
      { question: '$\\int \\sin^2 x\\,dx$ คืออะไร', choices: ['$\\dfrac{x}{2} - \\dfrac{\\sin 2x}{4} + C$', '$\\dfrac{x}{2} + \\dfrac{\\sin 2x}{4} + C$', '$-\\sin x\\cos x + C$', '$\\dfrac{\\sin^2 x}{2} + C$'], correctIndex: 0, explanation: 'ใช้ $\\sin^2 x = \\frac{1-\\cos 2x}{2}$ → $\\frac{x}{2} - \\frac{\\sin 2x}{4} + C$', lessonId: 'trig-integrals' },
      { question: 'ถ้ามี $\\sqrt{9-x^2}$ ในอินทิแกรนด์ควรแทนค่าใด', choices: ['$x = 3\\sin\\theta$', '$x = 3\\cos\\theta$', '$x = 3\\tan\\theta$', '$x = 3\\sec\\theta$'], correctIndex: 0, explanation: '$\\sqrt{a^2-x^2}$ ใช้ $x=a\\sin\\theta$; ที่นี่ $a=3$ → $x=3\\sin\\theta$', lessonId: 'trig-substitution' },
      { question: '$\\int \\frac{2}{x^2-1}\\,dx$ คืออะไร', choices: ['$\\ln|x-1| - \\ln|x+1| + C$', '$2\\ln|x^2-1| + C$', '$\\dfrac{-2}{(x^2-1)^2} + C$', '$\\ln(x-1)(x+1) + C$'], correctIndex: 0, explanation: 'Partial fractions: $\\frac{2}{(x-1)(x+1)} = \\frac{1}{x-1} - \\frac{1}{x+1}$ → $\\ln|x-1| - \\ln|x+1| + C$', lessonId: 'partial-fractions' },
      { question: '$\\int_0^\\infty e^{-x}\\,dx$ มีค่าเท่าใด', choices: ['1', '0', '$\\infty$', '$e$'], correctIndex: 0, explanation: '$\\lim_{t\\to\\infty}[-e^{-x}]_0^t = \\lim_{t\\to\\infty}(1 - e^{-t}) = 1$', lessonId: 'improper-integrals' },
      { question: 'p-integral $\\int_1^\\infty \\frac{1}{x^p}\\,dx$ ลู่เข้าเมื่อใด', choices: ['$p > 1$', '$p < 1$', '$p = 1$', '$p \\geq 1$'], correctIndex: 0, explanation: 'p-integral ลู่เข้าเมื่อ $p > 1$; ลู่ออกเมื่อ $p \\leq 1$ (รวมถึง harmonic series $p=1$)', lessonId: 'improper-integrals' },
    ]},
  ],
}
