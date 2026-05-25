import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'review-limits-continuity',
  title: 'แบบฝึกหัดท้ายบท — ลิมิตและความต่อเนื่อง',
  course: 'calculus1',
  chapter: 'ลิมิตและความต่อเนื่อง',
  order: 999,
  estimatedMinutes: 15,
  isChapterReview: true,
  blocks: [
    { type: 'text', content: 'ทบทวนความรู้เรื่องลิมิตและความต่อเนื่อง — เลือกคำตอบที่ถูกต้องที่สุดในแต่ละข้อ' },
    { type: 'quiz', questions: [
      { question: '$\\lim_{x\\to 4}(x^2 - 2x + 1)$ มีค่าเท่าใด', choices: ['9', '13', '7', '16'], correctIndex: 0, explanation: 'Direct substitution: $4^2 - 2(4) + 1 = 16 - 8 + 1 = 9$', lessonId: 'limit-definition' },
      { question: 'ข้อใดถูกต้องเกี่ยวกับ $\\lim_{x\\to a} f(x)$', choices: ['ค่าลิมิตไม่จำเป็นต้องเท่ากับ $f(a)$', 'ฟังก์ชันต้องนิยามที่ $x = a$ เสมอ', 'ลิมิตมีค่าเสมอสำหรับทุกฟังก์ชัน', 'ลิมิตต้องเป็นจำนวนเต็ม'], correctIndex: 0, explanation: 'ลิมิตบอกพฤติกรรม "รอบๆ" จุด $a$ — ฟังก์ชันอาจไม่นิยามที่ $a$ ก็ได้', lessonId: 'limit-definition' },
      { question: 'ถ้า $\\lim_{x\\to a} f(x) = 3$ และ $\\lim_{x\\to a} g(x) = 2$ แล้ว $\\lim_{x\\to a}[f(x) \\cdot g(x)]$ คืออะไร', choices: ['6', '5', '1', '1.5'], correctIndex: 0, explanation: 'กฎคูณ: $\\lim[f \\cdot g] = L \\cdot M = 3 \\cdot 2 = 6$', lessonId: 'limit-laws' },
      { question: '$\\lim_{x\\to 1}\\dfrac{x^2-1}{x-1}$ มีค่าเท่าใด', choices: ['2', '0', '1', 'ไม่มีอยู่'], correctIndex: 0, explanation: 'แยกตัวประกอบ: $\\frac{(x-1)(x+1)}{x-1} = x+1$ ดังนั้น $\\lim_{x\\to 1}(x+1) = 2$', lessonId: 'limit-laws' },
      { question: '$\\lim_{x\\to 0^-} \\dfrac{1}{x}$ มีค่าเท่าใด', choices: ['$-\\infty$', '$+\\infty$', '0', '1'], correctIndex: 0, explanation: 'เมื่อ $x \\to 0^-$ ($x$ เป็นลบขนาดเล็ก) $\\frac{1}{x}$ เป็นลบขนาดใหญ่มาก $\\to -\\infty$', lessonId: 'one-sided-infinite-limits' },
      { question: '$\\lim_{x\\to\\infty} \\dfrac{3}{x^2}$ มีค่าเท่าใด', choices: ['0', '3', '$\\infty$', 'ไม่มีอยู่'], correctIndex: 0, explanation: 'เมื่อ $x$ ใหญ่มาก $\\frac{3}{x^2}$ เข้าใกล้ 0 — horizontal asymptote ที่ $y = 0$', lessonId: 'one-sided-infinite-limits' },
      { question: 'ฟังก์ชัน $f(x) = \\dfrac{x^2-9}{x-3}$ มีประเภท discontinuity ใดที่ $x = 3$', choices: ['Removable discontinuity', 'Jump discontinuity', 'Infinite discontinuity', 'ไม่มี discontinuity'], correctIndex: 0, explanation: '$\\frac{(x-3)(x+3)}{x-3} = x+3$ เมื่อ $x\\neq 3$ — โพรงแก้ได้โดยนิยาม $f(3)=6$', lessonId: 'continuity' },
      { question: '3 เงื่อนไขของความต่อเนื่องที่ $x = a$ คือข้อใด', choices: ['$f(a)$ นิยามอยู่, ลิมิตมีอยู่, และ $\\lim_{x\\to a}f(x) = f(a)$', '$f(a) = 0$, ลิมิต $= 0$, และฟังก์ชันเป็น polynomial', 'ลิมิตขวา = ลิมิตซ้าย = 0', "$f'(a)$ มีอยู่และ $f(a) > 0$"], correctIndex: 0, explanation: 'ทั้ง 3 ต้องครบ: (1) $f(a)$ นิยาม (2) ลิมิตมีอยู่ (3) ค่าทั้งคู่เท่ากัน', lessonId: 'continuity' },
    ]},
  ],
}
