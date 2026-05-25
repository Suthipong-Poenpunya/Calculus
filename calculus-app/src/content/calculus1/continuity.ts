import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'continuity',
  title: 'ความต่อเนื่องของฟังก์ชัน',
  course: 'calculus1',
  chapter: 'ลิมิตและความต่อเนื่อง',
  order: 4,
  estimatedMinutes: 15,
  blocks: [
    { type: 'text', content: 'ฟังก์ชัน f ต่อเนื่องที่ x = a เมื่อตรงตาม 3 เงื่อนไข: (1) f(a) นิยามอยู่, (2) $\\lim_{x\\to a} f(x)$ มีอยู่, (3) $\\lim_{x\\to a} f(x) = f(a)$ ประเภทของ discontinuity: removable (โพรง), jump (กระโดด), infinite (asymptote)' },
    { type: 'equation', tex: '\\lim_{x \\to a} f(x) = f(a)', display: true },
    { type: 'example', title: 'ตัวอย่าง — ตรวจสอบความต่อเนื่อง', steps: [
      'ตรวจสอบว่า $f(x) = \\frac{x^2-4}{x-2}$ ต่อเนื่องที่ $x = 2$ หรือไม่',
      'เงื่อนไข (1): $f(2)$ ไม่นิยาม (หารด้วย 0) — ไม่ผ่านเงื่อนไข (1)',
      'ดังนั้นมี removable discontinuity ที่ $x = 2$',
      'แก้ได้โดยนิยาม $f(2) = \\lim_{x\\to 2}\\frac{(x-2)(x+2)}{x-2} = 4$',
    ]},
    { type: 'quiz', questions: [
      { question: 'ฟังก์ชัน $f(x) = x^2 + 2$ ต่อเนื่องที่ $x = 1$ หรือไม่', choices: ['ใช่ เพราะ $f(1) = 3$ และ $\\lim_{x\\to 1} f(x) = 3$', 'ไม่ใช่ เพราะ $f(1)$ ไม่นิยาม', 'ไม่ใช่ เพราะลิมิตไม่มีอยู่', 'ขึ้นกับค่าอื่นๆ ของฟังก์ชัน'], correctIndex: 0, explanation: 'Polynomial ทุกตัวต่อเนื่องทุกจุด $f(1) = 1 + 2 = 3$ และลิมิต $= 3$ ดังนั้นต่อเนื่อง' },
      { question: 'ประเภท discontinuity ของ $f(x) = \\frac{1}{x}$ ที่ $x = 0$ คืออะไร', choices: ['Infinite discontinuity', 'Removable discontinuity', 'Jump discontinuity', 'ไม่มี discontinuity'], correctIndex: 0, explanation: '$f(x) = \\frac{1}{x}$ มี vertical asymptote ที่ $x = 0$ จึงเป็น infinite discontinuity' },
    ]},
  ],
}
