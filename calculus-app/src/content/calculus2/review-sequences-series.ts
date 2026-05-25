import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'review-sequences-series',
  title: 'แบบฝึกหัดท้ายบท — ลำดับและอนุกรม',
  course: 'calculus2',
  chapter: 'ลำดับและอนุกรม',
  order: 999,
  estimatedMinutes: 15,
  isChapterReview: true,
  blocks: [
    { type: 'text', content: 'ทบทวนลำดับและอนุกรม — เลือกคำตอบที่ถูกต้องที่สุดในแต่ละข้อ' },
    { type: 'quiz', questions: [
      { question: '$\\lim_{n\\to\\infty} \\frac{2n^2}{n^2+1}$ มีค่าเท่าใด', choices: ['2', '0', '$\\infty$', '1'], correctIndex: 0, explanation: 'หารด้วย $n^2$: $\\frac{2}{1+1/n^2} \\to 2$', lessonId: 'sequences' },
      { question: 'ลำดับ $a_n = \\frac{n}{2n}$ ลู่เข้าหา', choices: ['$\\dfrac{1}{2}$', '0', '$\\infty$', '1'], correctIndex: 0, explanation: '$a_n = 1/2$ สำหรับทุก $n$ → ลู่เข้าหา $1/2$', lessonId: 'sequences' },
      { question: 'ผลรวม $\\sum_{n=0}^\\infty \\left(\\frac{2}{3}\\right)^n$ คืออะไร', choices: ['3', '$\\dfrac{3}{2}$', '$\\dfrac{2}{3}$', '$\\infty$'], correctIndex: 0, explanation: 'Geometric: $a=1$, $r=2/3$ → $\\frac{1}{1-2/3} = \\frac{1}{1/3} = 3$', lessonId: 'series-intro' },
      { question: 'Divergence Test: ถ้า $\\sum a_n$ ลู่เข้า แล้ว $\\lim a_n$ ต้องเป็น', choices: ['0', '1', '$\\infty$', 'ไม่สามารถบอกได้'], correctIndex: 0, explanation: 'ถ้า $\\sum a_n$ ลู่เข้า → $\\lim a_n = 0$ (contrapositive ของ Divergence Test)', lessonId: 'series-intro' },
      { question: '$\\sum_{n=1}^\\infty \\frac{1}{n^3}$ ลู่เข้าหรือลู่ออก', choices: ['ลู่เข้า ($p=3>1$)', 'ลู่ออก ($p=3>1$)', 'ลู่ออก (Harmonic)', 'inconclusive'], correctIndex: 0, explanation: 'p-series: $p=3>1$ → ลู่เข้า', lessonId: 'integral-comparison-tests' },
      { question: '$\\sum_{n=1}^\\infty \\frac{1}{\\sqrt{n}}$ ลู่เข้าหรือลู่ออก', choices: ['ลู่ออก ($p=1/2<1$)', 'ลู่เข้า ($p=1/2$)', 'ลู่เข้าหา 2', 'inconclusive'], correctIndex: 0, explanation: 'p-series: $p=1/2 < 1$ → ลู่ออก', lessonId: 'integral-comparison-tests' },
      { question: 'ทดสอบ $\\sum \\frac{n!}{2^n}$ ด้วย Ratio Test ผลเป็น', choices: ['ลู่ออก ($L = \\infty > 1$)', 'ลู่เข้า ($L < 1$)', 'inconclusive ($L=1$)', 'ลู่เข้าสัมบูรณ์'], correctIndex: 0, explanation: '$|a_{n+1}/a_n| = (n+1)/2 \\to \\infty > 1$ → ลู่ออก', lessonId: 'ratio-root-tests' },
      { question: 'Alternating Series Test กำหนดว่า $\\sum(-1)^{n+1}b_n$ ลู่เข้าถ้า', choices: ['$b_n$ ลดลงและ $\\lim b_n = 0$', '$b_n$ เพิ่มขึ้นและ $b_n > 0$', '$b_n$ คงที่', '$\\sum b_n$ ลู่เข้า'], correctIndex: 0, explanation: 'AST (Leibniz): $b_n$ decreasing → 0 รับประกัน alternating series ลู่เข้า', lessonId: 'alternating-series' },
    ]},
  ],
}
