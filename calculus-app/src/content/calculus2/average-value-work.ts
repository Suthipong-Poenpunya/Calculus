import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'average-value-work',
  title: 'ค่าเฉลี่ยฟังก์ชันและงาน (Work)',
  course: 'calculus2',
  chapter: 'การประยุกต์ของอินทิกรัล',
  order: 10,
  estimatedMinutes: 15,
  blocks: [
    { type: 'text', content: 'ค่าเฉลี่ยของฟังก์ชัน $f$ บน $[a,b]$: $f_{\\text{avg}} = \\frac{1}{b-a}\\int_a^b f(x)\\,dx$; Mean Value Theorem for Integrals: มี $c \\in [a,b]$ ที่ $f(c) = f_{\\text{avg}}$; งาน (Work): $W = \\int_a^b F(x)\\,dx$ เมื่อ $F(x)$ คือแรงที่ไม่คงที่' },
    { type: 'equation', tex: 'f_{\\text{avg}} = \\dfrac{1}{b-a}\\int_a^b f(x)\\,dx', display: true },
    { type: 'example', title: 'ตัวอย่าง — ค่าเฉลี่ยของ $f(x) = x^2$ บน $[0,3]$', steps: [
      '$f_{\\text{avg}} = \\frac{1}{3-0}\\int_0^3 x^2\\,dx = \\frac{1}{3}\\left[\\frac{x^3}{3}\\right]_0^3$',
      '$= \\frac{1}{3}(9) = 3$',
    ]},
    { type: 'quiz', questions: [
      { question: 'ค่าเฉลี่ยของ $f(x) = x^2$ บน $[0,3]$ คือเท่าใด', choices: ['3', '9', '1', '6'], correctIndex: 0, explanation: '$f_{\\text{avg}} = \\frac{1}{3}\\int_0^3 x^2\\,dx = \\frac{1}{3}[x^3/3]_0^3 = \\frac{1}{3}(9) = 3$' },
      { question: 'สูตร Work $W = \\int_a^b F(x)\\,dx$ ใช้ได้เมื่อใด', choices: ['เมื่อแรง $F$ ไม่คงที่ (แปรตามตำแหน่ง)', 'เมื่อแรงคงที่เท่านั้น', 'เมื่อวัตถุเคลื่อนที่เป็นวงกลม', 'เมื่อความเร็วคงที่'], correctIndex: 0, explanation: 'ถ้า $F$ คงที่ใช้ $W = Fd$; ถ้า $F$ แปรตาม $x$ ต้อง integrate $W = \\int F(x)\\,dx$' },
    ]},
  ],
}
