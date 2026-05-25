import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'logarithm-functions',
  title: 'ฟังก์ชัน Logarithm และกฎของ Logarithm',
  course: 'precalculus',
  chapter: 'ฟังก์ชัน Exponential และ Logarithm',
  order: 10,
  estimatedMinutes: 20,
  blocks: [
    { type: 'text', content: 'Logarithm คือฟังก์ชันผกผันของ Exponential — log_a(x) ถามว่า "a ยกกำลังเท่าไรจึงได้ x" domain ของ log คือ x > 0 เท่านั้น' },
    { type: 'equation', tex: '\\log_a x = y \\iff a^y = x \\qquad (a > 0,\\; a \\neq 1,\\; x > 0)', display: true },
    { type: 'text', content: 'กฎของ Logarithm ที่ต้องจำ — ใช้ในการแปลงรูปนิพจน์และแก้สมการ:' },
    { type: 'equation', tex: '\\log_a(mn) = \\log_a m + \\log_a n', display: true },
    { type: 'equation', tex: '\\log_a\\!\\left(\\frac{m}{n}\\right) = \\log_a m - \\log_a n', display: true },
    { type: 'equation', tex: '\\log_a(m^p) = p\\log_a m', display: true },
    { type: 'text', content: 'Natural logarithm (ln) ใช้ฐาน e: ln x = log_e(x) ใช้บ่อยที่สุดในแคลคูลัส เพราะ (ln x)′ = 1/x' },
    { type: 'example', title: 'ตัวอย่าง — คำนวณ Logarithm', steps: ['log₂(8) = ? → 2? = 8 = 2³ → log₂(8) = 3', 'log₁₀(1000) = ? → 10? = 1000 = 10³ → log₁₀(1000) = 3', 'ln(e²) = ? → e? = e² → ln(e²) = 2', 'log₂(32) − log₂(4) = log₂(32/4) = log₂(8) = 3'] },
    { type: 'quiz', questions: [
      { question: 'log₃(81) มีค่าเท่าใด', choices: ['4', '3', '27', '9'], correctIndex: 0, explanation: '3? = 81 = 3⁴ ดังนั้น log₃(81) = 4' },
      { question: 'ln(e⁵) มีค่าเท่าใด', choices: ['5', 'e⁵', '5e', '1/5'], correctIndex: 0, explanation: 'ln(eˣ) = x เสมอ เพราะ ln และ e เป็นฟังก์ชันผกผันกัน ดังนั้น ln(e⁵) = 5' },
    ]},
  ],
}
