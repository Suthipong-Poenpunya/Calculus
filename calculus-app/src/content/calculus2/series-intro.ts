import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'series-intro',
  title: 'อนุกรม อนุกรมเรขาคณิต และ Divergence Test',
  course: 'calculus2',
  chapter: 'ลำดับและอนุกรม',
  order: 12,
  estimatedMinutes: 15,
  blocks: [
    { type: 'text', content: 'อนุกรม $\\sum_{n=1}^\\infty a_n$ คือลิมิตของ partial sums $S_N = \\sum_{n=1}^N a_n$; Geometric series: $\\sum_{n=0}^\\infty ar^n = \\frac{a}{1-r}$ เมื่อ $|r|<1$ (ลู่ออกถ้า $|r|\\geq 1$); Divergence Test: ถ้า $\\lim_{n\\to\\infty} a_n \\neq 0$ แล้ว $\\sum a_n$ ลู่ออก (ถ้าลิมิต $= 0$ ยังตัดสินไม่ได้)' },
    { type: 'equation', tex: '\\sum_{n=0}^{\\infty} ar^n = \\dfrac{a}{1-r}, \\quad |r| < 1', display: true },
    { type: 'example', title: 'ตัวอย่าง — หาผลรวม $\\sum_{n=0}^\\infty \\left(\\frac{1}{2}\\right)^n$', steps: [
      'Geometric series: $a = 1$, $r = \\frac{1}{2}$, $|r| < 1$',
      'ผลรวม $= \\frac{1}{1-1/2} = \\frac{1}{1/2} = 2$',
    ]},
    { type: 'quiz', questions: [
      { question: 'ผลรวม $\\sum_{n=0}^\\infty \\left(\\frac{1}{3}\\right)^n$ คืออะไร', choices: ['$\\dfrac{3}{2}$', '$3$', '$\\dfrac{1}{2}$', '$1$'], correctIndex: 0, explanation: 'Geometric: $a=1$, $r=1/3$ → $\\frac{1}{1-1/3} = \\frac{1}{2/3} = \\frac{3}{2}$' },
      { question: 'Divergence Test: ถ้า $\\lim_{n\\to\\infty} a_n \\neq 0$ แล้ว $\\sum a_n$ เป็นอย่างไร', choices: ['ลู่ออก (diverges)', 'ลู่เข้า (converges)', 'ไม่สามารถบอกได้', 'ลู่เข้าหา 0'], correctIndex: 0, explanation: 'Divergence Test: $\\lim a_n \\neq 0 \\Rightarrow$ อนุกรมลู่ออก; ถ้า $\\lim a_n = 0$ ต้องใช้ test อื่น' },
    ]},
  ],
}
