import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'exponential-functions',
  title: 'ฟังก์ชัน Exponential',
  course: 'precalculus',
  chapter: 'ฟังก์ชัน Exponential และ Logarithm',
  order: 9,
  estimatedMinutes: 15,
  blocks: [
    { type: 'text', content: 'ฟังก์ชัน Exponential มีรูปแบบ f(x) = aˣ โดย a > 0 และ a ≠ 1 เป็นฐาน (base) ฟังก์ชันนี้เติบโตหรือลดลงแบบทวีคูณ พบในธรรมชาติตั้งแต่การเติบโตของประชากรจนถึงการสลายตัวของสารกัมมันตรังสี' },
    { type: 'equation', tex: 'f(x) = a^x, \\quad a > 0,\\; a \\neq 1', display: true },
    { type: 'text', content: 'กฎของเลขยกกำลัง (Laws of Exponents) ที่ต้องจำ: ใช้บ่อยมากในการแปลงรูปสมการ' },
    { type: 'equation', tex: 'a^m \\cdot a^n = a^{m+n} \\qquad \\frac{a^m}{a^n} = a^{m-n} \\qquad (a^m)^n = a^{mn}', display: true },
    { type: 'text', content: 'จำนวน e ≈ 2.71828... เป็นฐานธรรมชาติที่สำคัญที่สุดในแคลคูลัส เพราะ (eˣ)′ = eˣ — อนุพันธ์ของตัวเองเสมอ' },
    { type: 'equation', tex: 'e = \\lim_{n \\to \\infty}\\left(1 + \\frac{1}{n}\\right)^n \\approx 2.71828', display: true },
    { type: 'example', title: 'ตัวอย่าง — คำนวณค่า Exponential', steps: ['2³ = 8', '2⁻² = 1/2² = 1/4', 'e⁰ = 1 (a⁰ = 1 สำหรับทุก a ≠ 0)', '(2³)² = 2⁶ = 64'] },
    { type: 'quiz', questions: [
      { question: '4^(3/2) มีค่าเท่าใด', choices: ['8', '6', '12', '16'], correctIndex: 0, explanation: '4^(3/2) = (4^(1/2))³ = 2³ = 8' },
      { question: 'ฟังก์ชัน f(x) = eˣ มีคุณสมบัติพิเศษอะไร', choices: ['อนุพันธ์เท่ากับตัวเอง', 'มีค่าเป็นศูนย์ที่ x = 0', 'เป็นฟังก์ชันคู่ (even function)', 'มี domain เฉพาะ x > 0'], correctIndex: 0, explanation: '(eˣ)′ = eˣ — นี่คือสมบัติพิเศษที่ทำให้ e เป็นฐานธรรมชาติที่สำคัญที่สุดในแคลคูลัส' },
    ]},
  ],
}
