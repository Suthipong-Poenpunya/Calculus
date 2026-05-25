import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'review-applications-integration',
  title: 'แบบฝึกหัดท้ายบท — การประยุกต์ของอินทิกรัล',
  course: 'calculus2',
  chapter: 'การประยุกต์ของอินทิกรัล',
  order: 999,
  estimatedMinutes: 15,
  isChapterReview: true,
  blocks: [
    { type: 'text', content: 'ทบทวนการประยุกต์ใช้อินทิกรัล — เลือกคำตอบที่ถูกต้องที่สุดในแต่ละข้อ' },
    { type: 'quiz', questions: [
      { question: 'พื้นที่ระหว่าง $y = x$ และ $y = x^2$ บน $[0,1]$ คือเท่าใด', choices: ['$\\dfrac{1}{6}$', '$\\dfrac{1}{3}$', '$\\dfrac{1}{2}$', '$1$'], correctIndex: 0, explanation: '$\\int_0^1(x-x^2)\\,dx = [x^2/2 - x^3/3]_0^1 = 1/6$', lessonId: 'area-between-curves' },
      { question: 'จุดตัดของ $y = x$ และ $y = x^2$ คือ', choices: ['$x = 0$ และ $x = 1$', '$x = 0$ เท่านั้น', '$x = 1$ เท่านั้น', '$x = -1$ และ $x = 1$'], correctIndex: 0, explanation: '$x = x^2 \\Rightarrow x(x-1)=0 \\Rightarrow x=0$ หรือ $x=1$', lessonId: 'area-between-curves' },
      { question: 'ปริมาตรจากการหมุน $y = 3$ รอบแกน $x$ บน $[0,2]$ (Disk) คือเท่าใด', choices: ['$18\\pi$', '$6\\pi$', '$9\\pi$', '$36\\pi$'], correctIndex: 0, explanation: '$V = \\pi\\int_0^2 9\\,dx = 9\\pi(2) = 18\\pi$', lessonId: 'volume-disk-washer' },
      { question: 'สูตร Washer Method คือข้อใด เมื่อ $R$ = outer radius, $r$ = inner radius', choices: ['$V = \\pi\\int_a^b[R^2 - r^2]\\,dx$', '$V = \\pi\\int_a^b[R - r]^2\\,dx$', '$V = 2\\pi\\int_a^b Rr\\,dx$', '$V = \\pi\\int_a^b[R + r]\\,dx$'], correctIndex: 0, explanation: 'Washer = Disk ใหญ่ − Disk เล็ก: $V = \\pi\\int[R^2 - r^2]\\,dx$', lessonId: 'volume-disk-washer' },
      { question: 'ปริมาตรจากการหมุน $y = x$ รอบแกน $y$ บน $[0,1]$ ด้วย Shell Method คือเท่าใด', choices: ['$\\dfrac{2\\pi}{3}$', '$\\pi$', '$\\dfrac{\\pi}{2}$', '$2\\pi$'], correctIndex: 0, explanation: '$V = 2\\pi\\int_0^1 x\\cdot x\\,dx = 2\\pi[x^3/3]_0^1 = \\frac{2\\pi}{3}$', lessonId: 'volume-shell' },
      { question: 'สูตรความยาวส่วนโค้งคือข้อใด', choices: ['$L = \\int_a^b \\sqrt{1+[f\'(x)]^2}\\,dx$', '$L = \\int_a^b [f\'(x)]^2\\,dx$', '$L = \\int_a^b f(x)\\,dx$', '$L = \\int_a^b \\sqrt{f(x)}\\,dx$'], correctIndex: 0, explanation: 'Arc length มาจาก Pythagorean: $ds = \\sqrt{dx^2+dy^2}$ → $L = \\int\\sqrt{1+[f\'(x)]^2}\\,dx$', lessonId: 'arc-length' },
      { question: 'ค่าเฉลี่ยของ $f(x) = 2x$ บน $[0,4]$ คือเท่าใด', choices: ['4', '2', '8', '16'], correctIndex: 0, explanation: '$f_{\\text{avg}} = \\frac{1}{4}\\int_0^4 2x\\,dx = \\frac{1}{4}[x^2]_0^4 = \\frac{16}{4} = 4$', lessonId: 'average-value-work' },
      { question: 'Mean Value Theorem for Integrals กล่าวว่าอะไร', choices: ['มี $c \\in [a,b]$ ที่ $f(c) = f_{\\text{avg}}$', '$f_{\\text{avg}} = f(a) + f(b)$', 'ค่าเฉลี่ยต้องเท่ากับ $f$ ที่จุดกึ่งกลาง', '$f_{\\text{avg}}$ มีค่าเท่ากับ slope'], correctIndex: 0, explanation: 'MVT for Integrals: continuous $f$ บน $[a,b]$ รับประกันว่ามี $c$ ใน interval ที่ $f(c) = f_{\\text{avg}}$', lessonId: 'average-value-work' },
    ]},
  ],
}
