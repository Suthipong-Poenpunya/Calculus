import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'area-between-curves',
  title: 'พื้นที่ระหว่างเส้นโค้ง',
  course: 'calculus2',
  chapter: 'การประยุกต์ของอินทิกรัล',
  order: 6,
  estimatedMinutes: 15,
  blocks: [
    { type: 'text', content: 'พื้นที่ระหว่างสองเส้นโค้ง $f(x) \\geq g(x)$ บน $[a,b]$ คือ $A = \\int_a^b [f(x) - g(x)]\\,dx$ ขั้นตอน: (1) หาจุดตัดของเส้นโค้ง (2) ตรวจว่าเส้นใดอยู่เหนือ (3) integrate ผลต่าง' },
    { type: 'equation', tex: 'A = \\int_a^b [f(x) - g(x)]\\,dx', display: true },
    { type: 'example', title: 'ตัวอย่าง — พื้นที่ระหว่าง $y = x$ และ $y = x^2$ บน $[0,1]$', steps: [
      'จุดตัด: $x = x^2 \\Rightarrow x=0$ หรือ $x=1$',
      'บน $[0,1]$: $x \\geq x^2$ ดังนั้น $f(x)=x$, $g(x)=x^2$',
      '$A = \\int_0^1 (x - x^2)\\,dx = \\left[\\frac{x^2}{2} - \\frac{x^3}{3}\\right]_0^1 = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}$',
    ]},
    { type: 'quiz', questions: [
      { question: 'พื้นที่ระหว่าง $y = x$ และ $y = x^2$ บน $[0,1]$ คือเท่าใด', choices: ['$\\dfrac{1}{6}$', '$\\dfrac{1}{2}$', '$\\dfrac{1}{3}$', '$1$'], correctIndex: 0, explanation: '$\\int_0^1(x-x^2)\\,dx = [x^2/2 - x^3/3]_0^1 = 1/2 - 1/3 = 1/6$' },
      { question: 'ก่อนอินทิเกรตพื้นที่ระหว่างเส้นโค้งต้องทำอะไรก่อน', choices: ['หาจุดตัดของเส้นโค้งทั้งสอง', 'integrate แต่ละเส้นโค้งแยกกัน', 'หา derivative ของทั้งสองเส้น', 'หา antiderivative ของผลคูณ'], correctIndex: 0, explanation: 'ต้องหาจุดตัดก่อนเพื่อกำหนด bounds และรู้ว่าเส้นใดอยู่เหนือในแต่ละช่วง' },
    ]},
  ],
}
