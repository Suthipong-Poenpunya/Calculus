import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'review-integrals',
  title: 'แบบฝึกหัดท้ายบท — อินทิกรัลเบื้องต้น',
  course: 'calculus1',
  chapter: 'อินทิกรัลเบื้องต้น',
  order: 999,
  estimatedMinutes: 15,
  isChapterReview: true,
  blocks: [
    { type: 'text', content: 'ทบทวนความรู้เรื่องอินทิกรัลเบื้องต้น — เลือกคำตอบที่ถูกต้องที่สุดในแต่ละข้อ' },
    { type: 'quiz', questions: [
      { question: '$\\int 6x^2\\,dx$ คืออะไร', choices: ['$2x^3 + C$', '$6x^3 + C$', '$3x^2 + C$', '$12x + C$'], correctIndex: 0, explanation: '$\\int 6x^2\\,dx = 6 \\cdot \\frac{x^3}{3} + C = 2x^3 + C$', lessonId: 'antiderivatives' },
      { question: "ถ้า $F'(x) = x^2$ แล้ว $F(x)$ คืออะไร", choices: ['$\\dfrac{x^3}{3} + C$', '$2x + C$', '$x^3 + C$', '$\\dfrac{x^2}{2} + C$'], correctIndex: 0, explanation: '$\\int x^2\\,dx = \\frac{x^3}{3} + C$ — power rule for integrals', lessonId: 'antiderivatives' },
      { question: '$\\Delta x$ ใน Riemann sum แทนอะไร', choices: ['ความกว้างของแต่ละช่วง', 'ความสูงของแต่ละสี่เหลี่ยม', 'จำนวนช่วง', 'ผลรวมทั้งหมด'], correctIndex: 0, explanation: '$\\Delta x = \\frac{b-a}{n}$ คือความกว้างของแต่ละ subinterval', lessonId: 'riemann-sum' },
      { question: 'Left Riemann sum ของ $\\int_0^4 x\\,dx$ กับ $n=2$ มีค่าเท่าใด', choices: ['4', '8', '6', '2'], correctIndex: 0, explanation: '$\\Delta x = 2$; left endpoints: $x=0, 2$; sum $= f(0)(2) + f(2)(2) = 0 + 4 = 4$', lessonId: 'riemann-sum' },
      { question: '$\\int_0^3(2x)\\,dx$ มีค่าเท่าใด', choices: ['9', '6', '18', '3'], correctIndex: 0, explanation: 'Antiderivative: $x^2$; FTC: $F(3) - F(0) = 9 - 0 = 9$', lessonId: 'fundamental-theorem' },
      { question: '$\\int_1^4(3)\\,dx$ มีค่าเท่าใด', choices: ['9', '3', '12', '4'], correctIndex: 0, explanation: 'Antiderivative ของค่าคงที่ 3 คือ $3x$; FTC: $3(4) - 3(1) = 12 - 3 = 9$', lessonId: 'fundamental-theorem' },
      { question: 'FTC Part 1 กล่าวว่า $\\frac{d}{dx}\\int_a^x f(t)\\,dt$ เท่ากับอะไร', choices: ['$f(x)$', '$f(a)$', '$F(x) - F(a)$', '$\\int f(x)\\,dx$'], correctIndex: 0, explanation: 'FTC Part 1: อนุพันธ์ของ integral function คือ integrand ที่ upper limit = $f(x)$', lessonId: 'fundamental-theorem' },
      { question: 'เหตุใด $\\int_0^1 x\\,dx = \\frac{1}{2}$ จึงสัมพันธ์กับรูปทรงเรขาคณิต', choices: ['พื้นที่สามเหลี่ยมมุมฉากฐาน 1 สูง 1', 'เส้นรอบรูปของวงกลม', 'ความยาวของกราฟ $y=x$ จาก 0 ถึง 1', 'ปริมาตรใต้ผิว $z=x$'], correctIndex: 0, explanation: '$\\int_0^1 x\\,dx = \\frac{1}{2}$ = พื้นที่สามเหลี่ยมมุมฉาก ฐาน 1 สูง 1 = $\\frac{1}{2}(1)(1)$', lessonId: 'riemann-sum' },
    ]},
  ],
}
