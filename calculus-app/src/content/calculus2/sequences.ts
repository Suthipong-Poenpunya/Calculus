import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'sequences',
  title: 'ลำดับและลิมิตของลำดับ',
  course: 'calculus2',
  chapter: 'ลำดับและอนุกรม',
  order: 11,
  estimatedMinutes: 15,
  blocks: [
    { type: 'text', content: 'ลำดับ $\\{a_n\\}$ คือฟังก์ชันจาก $\\mathbb{N}$ ไปยัง $\\mathbb{R}$ — ลู่เข้า (converge) ถ้า $\\lim_{n\\to\\infty} a_n = L$ (จำกัด) ลู่ออก (diverge) ถ้าลิมิตไม่มีหรือเป็น $\\pm\\infty$; Monotone Convergence Theorem: ลำดับ bounded และ monotone (ล้วนเพิ่มหรือล้วนลด) จะลู่เข้าเสมอ' },
    { type: 'equation', tex: '\\lim_{n \\to \\infty} a_n = L', display: true },
    { type: 'example', title: 'ตัวอย่าง — $a_n = \\frac{n}{n+1}$ ลู่เข้าหาอะไร', steps: [
      '$\\lim_{n\\to\\infty} \\frac{n}{n+1} = \\lim_{n\\to\\infty} \\frac{1}{1 + 1/n} = \\frac{1}{1+0} = 1$',
      'ลำดับ $\\{n/(n+1)\\}$ ลู่เข้าหา 1',
    ]},
    { type: 'quiz', questions: [
      { question: '$\\lim_{n\\to\\infty} \\frac{n}{n+1}$ มีค่าเท่าใด', choices: ['1', '0', '$\\infty$', '$\\frac{1}{2}$'], correctIndex: 0, explanation: 'หารทั้งตัวเศษและตัวส่วนด้วย $n$: $\\frac{1}{1+1/n} \\to \\frac{1}{1} = 1$' },
      { question: 'ลำดับ $a_n = (-1)^n$ ลู่เข้าหรือลู่ออก', choices: ['ลู่ออก — ลิมิตไม่มี', 'ลู่เข้าหา 0', 'ลู่เข้าหา 1', 'ลู่เข้าหา $-1$'], correctIndex: 0, explanation: '$a_n$ สลับระหว่าง $+1$ และ $-1$ ไม่เข้าหาค่าคงที่ใดๆ → ลู่ออก' },
    ]},
  ],
}
