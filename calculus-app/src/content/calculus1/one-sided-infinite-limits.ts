import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'one-sided-infinite-limits',
  title: 'ลิมิตข้างเดียวและลิมิตอนันต์',
  course: 'calculus1',
  chapter: 'ลิมิตและความต่อเนื่อง',
  order: 3,
  estimatedMinutes: 15,
  blocks: [
    { type: 'text', content: 'ลิมิตข้างเดียว (One-sided limit): $\\lim_{x\\to a^+}$ คือ x เข้าหา a จากขวา, $\\lim_{x\\to a^-}$ คือ x เข้าหา a จากซ้าย ลิมิตสองข้างมีอยู่ก็ต่อเมื่อ two one-sided limits เท่ากัน ลิมิตอนันต์: $\\lim_{x\\to\\infty} f(x) = L$ บอกพฤติกรรมเมื่อ x ใหญ่มาก' },
    { type: 'equation', tex: '\\lim_{x \\to a^+} f(x) \\quad \\lim_{x \\to a^-} f(x) \\quad \\lim_{x \\to \\infty} f(x)', display: true },
    { type: 'example', title: 'ตัวอย่าง — ลิมิตอนันต์', steps: [
      'หา $\\lim_{x\\to 0^+} \\dfrac{1}{x}$',
      'เมื่อ $x$ เข้าหา $0$ จากขวา ($x > 0$ เล็กมาก) ค่า $\\frac{1}{x}$ จะใหญ่มาก',
      'ดังนั้น $\\lim_{x\\to 0^+} \\dfrac{1}{x} = +\\infty$',
      'เส้นแนวดิ่ง $x = 0$ คือ vertical asymptote ของฟังก์ชัน',
    ]},
    { type: 'quiz', questions: [
      { question: 'ลิมิตสองข้าง $\\lim_{x\\to a} f(x)$ มีอยู่เมื่อใด', choices: ['$\\lim_{x\\to a^+} f(x) = \\lim_{x\\to a^-} f(x)$', 'ฟังก์ชันนิยามที่ $x = a$', '$f(a)$ มีค่าเท่าใดก็ได้', 'ฟังก์ชันต่อเนื่องที่ $x = a$'], correctIndex: 0, explanation: 'ลิมิตสองข้างมีอยู่ก็ต่อเมื่อ left-hand limit = right-hand limit' },
      { question: '$\\lim_{x\\to \\infty} \\dfrac{1}{x}$ มีค่าเท่าใด', choices: ['0', '$\\infty$', '1', 'ไม่มีอยู่'], correctIndex: 0, explanation: 'เมื่อ $x$ ใหญ่มาก $\\frac{1}{x}$ เข้าใกล้ 0 — นี่คือ horizontal asymptote ที่ $y = 0$' },
    ]},
  ],
}
