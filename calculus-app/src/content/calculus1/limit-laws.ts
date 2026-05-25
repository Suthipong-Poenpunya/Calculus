import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'limit-laws',
  title: 'กฎการคำนวณลิมิต',
  course: 'calculus1',
  chapter: 'ลิมิตและความต่อเนื่อง',
  order: 2,
  estimatedMinutes: 15,
  blocks: [
    { type: 'text', content: 'ถ้า $\\lim_{x\\to a} f(x) = L$ และ $\\lim_{x\\to a} g(x) = M$ แล้วเราสามารถใช้กฎต่อไปนี้: กฎบวก/ลบ, กฎคูณ, กฎหาร (M ≠ 0), และกฎยกกำลัง Direct Substitution Property: ถ้า p(x) เป็น polynomial แล้ว $\\lim_{x\\to a} p(x) = p(a)$' },
    { type: 'equation', tex: '\\lim_{x\\to a}[f(x)+g(x)] = L + M', display: true },
    { type: 'example', title: 'ตัวอย่าง — คำนวณลิมิตโดยใช้กฎ', steps: [
      'หา $\\lim_{x\\to 3}(2x^2 + x - 1)$',
      'เนื่องจากเป็น polynomial ใช้ Direct Substitution ได้ทันที',
      'แทน $x = 3$: $2(3)^2 + 3 - 1 = 2(9) + 2 = 20$',
      'ดังนั้น $\\lim_{x\\to 3}(2x^2 + x - 1) = 20$',
    ]},
    { type: 'quiz', questions: [
      { question: '$\\lim_{x\\to 2}(x^2 + 3x - 4)$ มีค่าเท่าใด', choices: ['6', '4', '10', '2'], correctIndex: 0, explanation: 'Direct substitution: $2^2 + 3(2) - 4 = 4 + 6 - 4 = 6$' },
      { question: 'กฎการหาร $\\lim_{x\\to a}\\frac{f(x)}{g(x)}$ ใช้ได้เมื่อใด', choices: ['$\\lim_{x\\to a} g(x) \\neq 0$', 'เสมอไป', '$\\lim_{x\\to a} f(x) \\neq 0$', 'ทั้ง $f$ และ $g$ ต้องนิยามที่ $a$'], correctIndex: 0, explanation: 'กฎหารใช้ได้เมื่อลิมิตของตัวส่วน $\\neq 0$ ถ้าตัวส่วนเป็น 0 ต้องจัดรูปก่อน' },
    ]},
  ],
}
