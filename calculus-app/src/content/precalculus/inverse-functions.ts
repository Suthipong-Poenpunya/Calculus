import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'inverse-functions',
  title: 'ฟังก์ชันผกผัน (Inverse Functions)',
  course: 'precalculus',
  chapter: 'ฟังก์ชันและกราฟ',
  order: 4,
  estimatedMinutes: 20,
  blocks: [
    { type: 'text', content: 'ฟังก์ชันผกผัน f⁻¹ คือฟังก์ชันที่สลับ input กับ output ของ f — ถ้า f(a) = b แล้ว f⁻¹(b) = a ฟังก์ชันจะมีผกผันได้ก็ต่อเมื่อเป็น one-to-one (ทุก output มีที่มาจาก input เดียว)' },
    { type: 'equation', tex: 'f(f^{-1}(x)) = x \\quad \\text{และ} \\quad f^{-1}(f(x)) = x', display: true },
    { type: 'text', content: 'วิธีหาฟังก์ชันผกผัน: (1) เขียน y = f(x) (2) สลับ x กับ y (3) แก้สมการหา y ใหม่ (4) เขียนผลลัพธ์เป็น f⁻¹(x)' },
    { type: 'example', title: 'ตัวอย่าง — หา f⁻¹(x) ของ f(x) = 2x + 1', steps: ['เขียน y = 2x + 1', 'สลับ x กับ y: x = 2y + 1', 'แก้หา y: 2y = x − 1 → y = (x − 1)/2', 'ดังนั้น f⁻¹(x) = (x − 1)/2', 'ตรวจสอบ: f(f⁻¹(3)) = f(1) = 2(1) + 1 = 3 ✓'] },
    { type: 'equation', tex: 'f^{-1}(x) = \\frac{x - 1}{2}', display: true },
    { type: 'quiz', questions: [
      { question: 'ถ้า f(x) = 3x − 6 แล้ว f⁻¹(x) คืออะไร', choices: ['(x + 6)/3', '(x − 6)/3', '3x + 6', '(x + 2)/3'], correctIndex: 0, explanation: 'y = 3x − 6 → สลับ: x = 3y − 6 → 3y = x + 6 → y = (x + 6)/3' },
      { question: 'กราฟของ f⁻¹(x) สัมพันธ์กับกราฟของ f(x) อย่างไร', choices: ['สะท้อนผ่านเส้น y = x', 'สะท้อนผ่านแกน x', 'สะท้อนผ่านแกน y', 'หมุน 90° รอบจุดกำเนิด'], correctIndex: 0, explanation: 'การสลับ x กับ y ทำให้กราฟสะท้อนผ่านเส้น y = x เสมอ' },
    ]},
  ],
}
