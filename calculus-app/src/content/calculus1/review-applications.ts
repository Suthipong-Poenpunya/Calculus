import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'review-applications',
  title: 'แบบฝึกหัดท้ายบท — การประยุกต์ของอนุพันธ์',
  course: 'calculus1',
  chapter: 'การประยุกต์ของอนุพันธ์',
  order: 999,
  estimatedMinutes: 15,
  isChapterReview: true,
  blocks: [
    { type: 'text', content: 'ทบทวนความรู้เรื่องการประยุกต์ของอนุพันธ์ — เลือกคำตอบที่ถูกต้องที่สุดในแต่ละข้อ' },
    { type: 'quiz', questions: [
      { question: 'Critical points ของ $f(x) = x^2 - 6x + 5$ อยู่ที่ $x = ?$', choices: ['3', '6', '5', '1'], correctIndex: 0, explanation: "$f'(x) = 2x - 6 = 0 \\Rightarrow x = 3$", lessonId: 'critical-points' },
      { question: '$f(x) = x^3 + 3x^2 - 9x$ มีกี่ critical points', choices: ['2', '1', '3', '0'], correctIndex: 0, explanation: "$f'(x) = 3x^2 + 6x - 9 = 3(x+3)(x-1) = 0 \\Rightarrow x = -3, 1$ — 2 จุด", lessonId: 'critical-points' },
      { question: "ถ้า $f'(c) = 0$ และ $f''(c) = 5$ จุด $c$ คืออะไร", choices: ['Local minimum', 'Local maximum', 'Inflection point', 'ตัดสินไม่ได้'], correctIndex: 0, explanation: "$f''(c) > 0 \\Rightarrow$ กราฟเว้าขึ้น $\\Rightarrow$ local minimum", lessonId: 'derivative-tests' },
      { question: "First Derivative Test: ถ้า $f'$ เปลี่ยนจาก + เป็น − ที่จุด $c$ แล้ว $c$ คืออะไร", choices: ['Local maximum', 'Local minimum', 'Inflection point', 'Asymptote'], correctIndex: 0, explanation: "$f'$: + → − หมายความว่า $f$ เพิ่มแล้วลด → local max", lessonId: 'derivative-tests' },
      { question: 'ใน optimization "ใช้ constraint เหลือตัวแปรเดียว" หมายความว่าอะไร', choices: ['แทนค่าจาก constraint เพื่อลด objective function เหลือตัวแปรเดียว', 'ตั้งอนุพันธ์ของ constraint เท่า 0', 'หา critical points ของ constraint', 'ยืนยัน max/min ด้วย constraint'], correctIndex: 0, explanation: 'ต้อง express objective ในตัวแปรเดียวก่อนหาอนุพันธ์', lessonId: 'optimization' },
      { question: 'สี่เหลี่ยมที่มีเส้นรอบรูป 40 m จะมีพื้นที่มากสุดเมื่อเป็นรูปใด', choices: ['จัตุรัส (ด้านละ 10 m)', 'สี่เหลี่ยมผืนผ้า 5×15', 'สี่เหลี่ยมผืนผ้า 2×18', 'สี่เหลี่ยมผืนผ้า 1×19'], correctIndex: 0, explanation: "$2x + 2y = 40$, maximize $A = xy$: $A = x(20-x)$, $A' = 20-2x = 0 \\Rightarrow x = 10$", lessonId: 'optimization' },
      { question: 'Absolute maximum ของ $f(x) = x^2$ บน $[-2, 3]$ คือเท่าใด', choices: ['9', '4', '0', '6'], correctIndex: 0, explanation: "Critical point $f'(x) = 0$: $x=0$, $f(0)=0$; endpoints: $f(-2)=4$, $f(3)=9$ — max คือ 9", lessonId: 'critical-points' },
      { question: 'Second Derivative Test ล้มเหลว (inconclusive) เมื่อใด', choices: ["$f''(c) = 0$", "$f'(c) = 0$", "$f''(c) > 0$", "$f''(c) < 0$"], correctIndex: 0, explanation: "ถ้า $f''(c) = 0$ ต้องใช้ First Derivative Test แทน", lessonId: 'derivative-tests' },
    ]},
  ],
}
