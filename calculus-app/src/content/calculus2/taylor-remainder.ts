import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'taylor-remainder',
  title: 'ค่าประมาณและขอบเขตความคลาดเคลื่อน',
  course: 'calculus2',
  chapter: 'อนุกรมกำลังและอนุกรมเทย์เลอร์',
  order: 20,
  estimatedMinutes: 15,
  blocks: [
    { type: 'text', content: 'Taylor Remainder $R_n(x) = f(x) - T_n(x)$ คือความคลาดเคลื่อนจากการใช้ polynomial degree $n$ แทน $f$; Lagrange Remainder bound: $|R_n(x)| \\leq \\frac{M|x-a|^{n+1}}{(n+1)!}$ เมื่อ $M$ คือ bound ของ $|f^{(n+1)}|$ บน interval; ถ้า $R_n \\to 0$ เมื่อ $n\\to\\infty$ แล้ว Taylor series แทน $f(x)$ ได้แม่นยำ' },
    { type: 'equation', tex: '|R_n(x)| \\leq \\dfrac{M|x-a|^{n+1}}{(n+1)!}', display: true },
    { type: 'example', title: 'ตัวอย่าง — หา $n$ ที่ error ของ Maclaurin ของ $e^x$ ที่ $x=1$ น้อยกว่า $0.001$', steps: [
      '$|R_n(1)| \\leq \\frac{M}{(n+1)!}$ โดย $M = e^1 < 3$ (bound ของ $e^x$ บน $[0,1]$)',
      'ต้องการ $\\frac{3}{(n+1)!} < 0.001 \\Rightarrow (n+1)! > 3000$',
      '$(7+1)! = 40320 > 3000$ → $n = 7$ เพียงพอ',
    ]},
    { type: 'quiz', questions: [
      { question: 'Lagrange remainder บอกว่าอะไร', choices: ['$|R_n(x)| \\leq \\frac{M|x-a|^{n+1}}{(n+1)!}$ เมื่อ $M$ เป็น bound ของ $|f^{(n+1)}|$', '$|R_n(x)| = f(x) - T_n(x)$ เสมอ', '$R_n \\to \\infty$ เมื่อ $n\\to\\infty$', '$R_n = 0$ เมื่อ $f$ เป็น polynomial'], correctIndex: 0, explanation: 'Lagrange form ให้ upper bound ของ error — ใช้กำหนดว่าต้องการ term กี่ตัวเพื่อความแม่นยำที่ต้องการ' },
      { question: 'Taylor remainder $R_n(x) \\to 0$ เมื่อ $n \\to \\infty$ หมายความว่าอะไร', choices: ['Taylor series ลู่เข้าหา $f(x)$ — series แทนฟังก์ชันได้แม่นยำ', 'ต้องการ term จำนวนมากมาย', '$f$ เป็น polynomial degree $n$', 'Series ลู่ออก'], correctIndex: 0, explanation: 'ถ้า $R_n \\to 0$: $f(x) = \\lim_{n\\to\\infty} T_n(x)$ — series คือฟังก์ชันจริงๆ (เช่น $e^x$, $\\sin x$, $\\cos x$)' },
    ]},
  ],
}
