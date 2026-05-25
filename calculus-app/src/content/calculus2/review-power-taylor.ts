import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'review-power-taylor',
  title: 'แบบฝึกหัดท้ายบท — อนุกรมกำลังและเทย์เลอร์',
  course: 'calculus2',
  chapter: 'อนุกรมกำลังและอนุกรมเทย์เลอร์',
  order: 999,
  estimatedMinutes: 15,
  isChapterReview: true,
  blocks: [
    { type: 'text', content: 'ทบทวนอนุกรมกำลังและอนุกรมเทย์เลอร์ — เลือกคำตอบที่ถูกต้องที่สุดในแต่ละข้อ' },
    { type: 'quiz', questions: [
      { question: 'Power series $\\sum x^n$ ลู่เข้าเมื่อ $|x| < ?$', choices: ['1', '0', '$e$', '$\\infty$'], correctIndex: 0, explanation: 'Geometric series ลู่เข้าเมื่อ $|r| = |x| < 1$ → $R = 1$', lessonId: 'power-series' },
      { question: 'Power series $\\sum c_n(x-a)^n$ ลู่เข้าแน่นอนที่จุดใด', choices: ['ที่ center $x = a$ เสมอ', 'ที่ $x = 0$ เสมอ', 'ที่ endpoint ของ interval เสมอ', 'ทุก $x$ เสมอ'], correctIndex: 0, explanation: 'ที่ center ทุก term = 0 (ยกเว้น constant) → ลู่เข้าเสมอ', lessonId: 'power-series' },
      { question: 'Radius of convergence ของ $\\sum \\frac{x^n}{n!}$ คือเท่าใด', choices: ['$\\infty$', '1', '0', '$e$'], correctIndex: 0, explanation: 'Ratio Test: $|a_{n+1}/a_n| = |x|/(n+1) \\to 0 < 1$ สำหรับทุก $x$ → $R=\\infty$', lessonId: 'convergence-interval' },
      { question: 'เหตุใดจึงต้องตรวจสอบ endpoints ของ interval of convergence แยก', choices: ['Ratio Test inconclusive ที่ endpoints ($L=1$)', 'Power series ไม่นิยามที่ endpoints', 'Endpoints อยู่นอก radius ของ convergence', 'ไม่จำเป็น — Ratio Test เพียงพอ'], correctIndex: 0, explanation: 'ที่ endpoints $|x-a| = R$ → Ratio Test ให้ $L=1$ (inconclusive) ต้องใช้ test อื่น', lessonId: 'convergence-interval' },
      { question: 'Maclaurin series ของ $\\cos x$ คืออะไร', choices: ['$\\sum_{n=0}^\\infty \\dfrac{(-1)^n x^{2n}}{(2n)!}$', '$\\sum_{n=0}^\\infty \\dfrac{x^{2n}}{(2n)!}$', '$\\sum_{n=0}^\\infty \\dfrac{(-1)^n x^{2n+1}}{(2n+1)!}$', '$\\sum_{n=0}^\\infty \\dfrac{x^n}{n!}$'], correctIndex: 0, explanation: '$\\cos x = 1 - x^2/2! + x^4/4! - \\cdots = \\sum \\frac{(-1)^n x^{2n}}{(2n)!}$', lessonId: 'taylor-maclaurin' },
      { question: 'Taylor series ช่วยคำนวณ limit รูป $0/0$ ได้เพราะ', choices: ['สามารถ cancel terms ที่เป็น 0 ออกจาก series ได้', 'Taylor series = 0 เสมอเมื่อ $x\\to 0$', 'L\'Hôpital ใช้กับ series ได้โดยตรง', 'Series มี horizontal asymptote ที่ 0'], correctIndex: 0, explanation: 'เมื่อแทน series แล้ว cancel terms → เห็นค่า limit ทันที เช่น $\\sin x/x = (x - x^3/6 + \\cdots)/x \\to 1$', lessonId: 'taylor-applications' },
      { question: 'Lagrange remainder ใช้ทำอะไร', choices: ['หา upper bound ของ error ในการประมาณ $f$ ด้วย Taylor polynomial', 'หาผลรวมของ Taylor series', 'ยืนยันว่า series ลู่เข้า', 'หา radius of convergence'], correctIndex: 0, explanation: '$|R_n| \\leq M|x-a|^{n+1}/(n+1)!$ บอกว่า error ไม่เกินเท่าใด — ใช้กำหนดจำนวน term ที่ต้องการ', lessonId: 'taylor-remainder' },
      { question: 'ถ้า $R_n(x) \\to 0$ เมื่อ $n\\to\\infty$ แล้ว', choices: ['Taylor series แทนฟังก์ชัน $f(x)$ ได้แม่นยำ', 'Taylor series ลู่ออก', '$f$ ต้องเป็น polynomial', 'ต้องการ term มากกว่า $n$ เสมอ'], correctIndex: 0, explanation: '$R_n \\to 0$ ⟺ $T_n(x) \\to f(x)$ — series แทน $f$ ได้จริง (valid สำหรับ $e^x$, $\\sin x$, $\\cos x$ ทุก $x$)', lessonId: 'taylor-remainder' },
    ]},
  ],
}
