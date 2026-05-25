import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'integral-comparison-tests',
  title: 'Integral Test และ Comparison Tests',
  course: 'calculus2',
  chapter: 'ลำดับและอนุกรม',
  order: 13,
  estimatedMinutes: 15,
  blocks: [
    { type: 'text', content: 'Integral Test: ถ้า $f$ positive, decreasing, continuous แล้ว $\\sum f(n)$ และ $\\int f\\,dx$ ลู่เข้า/ออกพร้อมกัน; p-series: $\\sum_{n=1}^\\infty \\frac{1}{n^p}$ ลู่เข้าเมื่อ $p>1$ ลู่ออกเมื่อ $p\\leq 1$; Comparison Test: เปรียบกับอนุกรมที่รู้ผล; Limit Comparison Test: ถ้า $\\lim \\frac{a_n}{b_n} = c > 0$ แล้วลู่เข้า/ออกพร้อมกัน' },
    { type: 'equation', tex: '\\sum_{n=1}^{\\infty} \\dfrac{1}{n^p} \\text{ ลู่เข้าเมื่อ } p > 1', display: true },
    { type: 'example', title: 'ตัวอย่าง — ทดสอบ $\\sum \\frac{1}{n^2}$ ด้วย Integral Test', steps: [
      '$f(x) = 1/x^2$ เป็น positive, decreasing, continuous บน $[1,\\infty)$',
      '$\\int_1^\\infty \\frac{1}{x^2}\\,dx = 1$ — ลู่เข้า',
      'ดังนั้น $\\sum_{n=1}^\\infty \\frac{1}{n^2}$ ลู่เข้า',
    ]},
    { type: 'quiz', questions: [
      { question: '$\\sum_{n=1}^\\infty \\frac{1}{n^2}$ ลู่เข้าหรือลู่ออก', choices: ['ลู่เข้า ($p=2>1$)', 'ลู่ออก ($p=2<3$)', 'ลู่เข้าหา 1', 'ไม่สามารถบอกได้'], correctIndex: 0, explanation: 'p-series: $p=2>1$ → ลู่เข้า (ค่าจริงคือ $\\pi^2/6$)' },
      { question: 'อนุกรม Harmonic $\\sum_{n=1}^\\infty \\frac{1}{n}$ ลู่เข้าหรือลู่ออก', choices: ['ลู่ออก ($p=1$ ไม่ผ่าน p-series test)', 'ลู่เข้าหา $\\ln 2$', 'ลู่เข้าหา 1', 'ไม่สามารถบอกได้'], correctIndex: 0, explanation: 'p-series: $p=1 \\leq 1$ → ลู่ออก; ยืนยันได้ด้วย Integral Test: $\\int 1/x\\,dx = \\ln x \\to \\infty$' },
    ]},
  ],
}
