import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'composition-functions',
  title: 'ฟังก์ชันประกอบ (Composition of Functions)',
  course: 'precalculus',
  chapter: 'ฟังก์ชันและกราฟ',
  order: 5,
  estimatedMinutes: 15,
  blocks: [
    { type: 'text', content: 'ฟังก์ชันประกอบ (f ∘ g)(x) หมายถึงการนำ output ของ g ไปเป็น input ของ f — อ่านว่า "f ประกอบ g" หรือ "f หลัง g"' },
    { type: 'equation', tex: '(f \\circ g)(x) = f(g(x))', display: true },
    { type: 'example', title: 'ตัวอย่าง — หาฟังก์ชันประกอบ', steps: ['กำหนด f(x) = x² และ g(x) = x + 1', '(f ∘ g)(x) = f(g(x)) = f(x + 1) = (x + 1)²', '(g ∘ f)(x) = g(f(x)) = g(x²) = x² + 1', 'สังเกต: (f ∘ g)(x) ≠ (g ∘ f)(x) → การประกอบฟังก์ชันไม่สลับที่กัน', 'ตัวอย่างค่า: (f ∘ g)(3) = (3 + 1)² = 16, แต่ (g ∘ f)(3) = 3² + 1 = 10'] },
    { type: 'text', content: 'Domain ของ (f ∘ g) คือเซตของ x ใน domain ของ g ที่ทำให้ g(x) อยู่ใน domain ของ f ด้วย' },
    { type: 'quiz', questions: [
      { question: 'ถ้า f(x) = 2x และ g(x) = x + 3 แล้ว (f ∘ g)(x) คืออะไร', choices: ['2x + 6', '2x + 3', '2x² + 6', 'x + 6'], correctIndex: 0, explanation: '(f ∘ g)(x) = f(g(x)) = f(x + 3) = 2(x + 3) = 2x + 6' },
      { question: 'ถ้า f(x) = x + 1 และ g(x) = x² แล้ว (g ∘ f)(2) มีค่าเท่าใด', choices: ['9', '5', '6', '4'], correctIndex: 0, explanation: '(g ∘ f)(2) = g(f(2)) = g(3) = 3² = 9' },
    ]},
  ],
}
