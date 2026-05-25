import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'power-series',
  title: 'อนุกรมกำลังและการแทนฟังก์ชัน',
  course: 'calculus2',
  chapter: 'อนุกรมกำลังและอนุกรมเทย์เลอร์',
  order: 16,
  estimatedMinutes: 15,
  blocks: [
    { type: 'text', content: 'Power series $\\sum_{n=0}^\\infty c_n(x-a)^n$ centered ที่ $a$ — ลู่เข้าแน่นอนที่ center ($x=a$) และในบางช่วงรอบๆ center; ตัวอย่างที่สำคัญ: $\\frac{1}{1-x} = \\sum_{n=0}^\\infty x^n$ สำหรับ $|x|<1$ — มาจาก geometric series; power series สามารถ differentiate และ integrate ได้ term-by-term ภายใน interval ลู่เข้า' },
    { type: 'equation', tex: '\\sum_{n=0}^{\\infty} c_n (x-a)^n', display: true },
    { type: 'example', title: 'ตัวอย่าง — $\\frac{1}{1-x} = 1 + x + x^2 + \\cdots$ สำหรับ $|x|<1$', steps: [
      'Geometric series: $a=1$, $r=x$ → $\\sum_{n=0}^\\infty x^n = \\frac{1}{1-x}$ สำหรับ $|r|=|x|<1$',
      'แทน $x=0.5$: $\\frac{1}{0.5} = 2 = 1 + 0.5 + 0.25 + \\cdots$ ✓',
    ]},
    { type: 'quiz', questions: [
      { question: 'Power series $\\sum_{n=0}^\\infty x^n$ เท่ากับฟังก์ชันใดเมื่อ $|x| < 1$', choices: ['$\\dfrac{1}{1-x}$', '$\\dfrac{1}{1+x}$', '$e^x$', '$\\ln(1+x)$'], correctIndex: 0, explanation: 'Geometric series: $r=x$, $|x|<1$ → ผลรวม $= \\frac{1}{1-x}$' },
      { question: 'Power series $\\sum c_n(x-a)^n$ ลู่เข้าแน่นอนที่จุดใด', choices: ['ที่ center $x = a$ เสมอ', 'ที่ $x = 0$ เสมอ', 'เฉพาะเมื่อ $c_n = 1$', 'ไม่แน่นอน'], correctIndex: 0, explanation: 'ที่ $x = a$: ทุก term = 0 ยกเว้น $c_0(a-a)^0 = c_0$ → ลู่เข้าเสมอ' },
    ]},
  ],
}
