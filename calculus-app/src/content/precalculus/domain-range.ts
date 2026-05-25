import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'domain-range',
  title: 'โดเมนและเรนจ์ (Domain & Range)',
  course: 'precalculus',
  chapter: 'ฟังก์ชันและกราฟ',
  order: 2,
  estimatedMinutes: 15,
  blocks: [
    { type: 'text', content: 'โดเมน (Domain) คือเซตของค่า input ทั้งหมดที่ฟังก์ชันรับได้ — คือค่า x ที่ทำให้ฟังก์ชันมีนิยาม เรนจ์ (Range) คือเซตของค่า output ทั้งหมดที่ฟังก์ชันให้ออกมาได้' },
    { type: 'equation', tex: '\\text{domain} = \\{\\, x \\mid f(x) \\text{ มีนิยาม} \\,\\}', display: true },
    { type: 'text', content: 'ข้อควรระวังหลักในการหา domain: (1) ห้ามหารด้วยศูนย์ (2) ห้ามหารากที่สองของจำนวนลบ (3) ห้าม log ของจำนวนที่ไม่เป็นบวก' },
    { type: 'example', title: 'ตัวอย่าง — หา Domain และ Range', steps: ['f(x) = √x: ต้องการ x ≥ 0 → domain: [0, ∞), range: [0, ∞)', 'g(x) = 1/x: ต้องการ x ≠ 0 → domain: (−∞, 0) ∪ (0, ∞), range: (−∞, 0) ∪ (0, ∞)', 'h(x) = x²: รับ x ได้ทุกค่า → domain: (−∞, ∞), range: [0, ∞) เพราะ x² ≥ 0 เสมอ'] },
    { type: 'equation', tex: 'f(x) = \\sqrt{x - 3} \\implies \\text{domain: } x \\geq 3', display: true },
    { type: 'quiz', questions: [
      { question: 'Domain ของ f(x) = √(x − 5) คืออะไร', choices: ['x ≥ 5', 'x > 5', 'x ≤ 5', 'x ≠ 5'], correctIndex: 0, explanation: 'ต้องการให้ x − 5 ≥ 0 จึงได้ x ≥ 5' },
      { question: 'Range ของ f(x) = x² คืออะไร', choices: ['[0, ∞)', '(−∞, ∞)', '(0, ∞)', '[−1, ∞)'], correctIndex: 0, explanation: 'x² มีค่าไม่ติดลบเสมอ และสามารถเป็น 0 ได้ (เมื่อ x = 0) จึง range คือ [0, ∞)' },
    ]},
  ],
}
