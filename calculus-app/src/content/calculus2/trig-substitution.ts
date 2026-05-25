import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'trig-substitution',
  title: 'การแทนค่าตรีโกณมิติ',
  course: 'calculus2',
  chapter: 'เทคนิคการอินทิเกรต',
  order: 3,
  estimatedMinutes: 15,
  blocks: [
    { type: 'text', content: 'Trig substitution ใช้กำจัดรากที่สองในอินทิแกรนด์: $\\sqrt{a^2 - x^2}$ → แทน $x = a\\sin\\theta$; $\\sqrt{a^2 + x^2}$ → แทน $x = a\\tan\\theta$; $\\sqrt{x^2 - a^2}$ → แทน $x = a\\sec\\theta$ ผลลัพธ์จะเป็น trig integral ที่คำนวณได้' },
    { type: 'equation', tex: '\\sqrt{a^2 - x^2} \\Rightarrow x = a\\sin\\theta', display: true },
    { type: 'example', title: 'ตัวอย่าง — หา $\\int \\sqrt{1-x^2}\\,dx$', steps: [
      'แทน $x = \\sin\\theta$, $dx = \\cos\\theta\\,d\\theta$',
      '$\\sqrt{1-\\sin^2\\theta} = \\cos\\theta$',
      '$\\int \\cos^2\\theta\\,d\\theta = \\frac{\\theta}{2} + \\frac{\\sin 2\\theta}{4} + C$',
      'แปลงกลับ: $\\theta = \\arcsin x$, $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2x\\sqrt{1-x^2}$',
      'แทนใน step 3: $\\frac{\\arcsin x}{2} + \\frac{2x\\sqrt{1-x^2}}{4} + C$',
      'ผล: $\\frac{1}{2}\\arcsin x + \\frac{1}{2}x\\sqrt{1-x^2} + C$',
    ]},
    { type: 'quiz', questions: [
      { question: 'ถ้ามี $\\sqrt{4+x^2}$ ในอินทิแกรนด์ควรแทนค่าใด', choices: ['$x = 2\\tan\\theta$', '$x = 2\\sin\\theta$', '$x = 2\\sec\\theta$', '$x = 2\\cos\\theta$'], correctIndex: 0, explanation: '$\\sqrt{a^2+x^2}$ ใช้ $x = a\\tan\\theta$; ที่นี่ $a=2$ จึงแทน $x = 2\\tan\\theta$' },
      { question: 'การแทนค่า $x = a\\sec\\theta$ ใช้กำจัดรากใด', choices: ['$\\sqrt{x^2 - a^2}$', '$\\sqrt{a^2 - x^2}$', '$\\sqrt{a^2 + x^2}$', '$\\sqrt{x^2 + a^2}$'], correctIndex: 0, explanation: '$x = a\\sec\\theta$ ทำให้ $\\sqrt{x^2-a^2} = \\sqrt{a^2\\sec^2\\theta - a^2} = a\\tan\\theta$' },
    ]},
  ],
}
