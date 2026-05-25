import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'optimization',
  title: 'โจทย์ Optimization',
  course: 'calculus1',
  chapter: 'การประยุกต์ของอนุพันธ์',
  order: 14,
  estimatedMinutes: 15,
  blocks: [
    { type: 'text', content: 'โจทย์ optimization ต้องการหาค่าสูงสุดหรือต่ำสุดของ objective function ขั้นตอน: (1) กำหนดตัวแปร (2) เขียน objective function (3) ใช้ constraint เหลือตัวแปรเดียว (4) หาอนุพันธ์และตั้งเท่า 0 (5) ยืนยันเป็น max/min' },
    { type: 'example', title: 'ตัวอย่าง — กล่องพื้นผิวน้อยสุด', steps: [
      'กล่องฐาน $x \\times x$ สูง $h$ ปริมาตร 32 cm³ — หา dimension ที่ใช้พื้นผิวน้อยสุด',
      'Constraint: $x^2 h = 32 \\Rightarrow h = 32/x^2$',
      'Objective: $S = x^2 + 4xh = x^2 + 128/x$',
      "$S'(x) = 2x - 128/x^2 = 0 \\Rightarrow x^3 = 64 \\Rightarrow x = 4$",
      'ดังนั้น $x = 4$ cm, $h = 2$ cm',
    ]},
    { type: 'quiz', questions: [
      { question: 'ในโจทย์ optimization ขั้นตอนแรกหลังกำหนดตัวแปรแล้วคืออะไร', choices: ['เขียน objective function', 'หาอนุพันธ์', 'ตั้งอนุพันธ์เท่า 0', 'ยืนยัน max/min'], correctIndex: 0, explanation: 'หลังกำหนดตัวแปรต้องเขียน objective function ที่ต้องการ maximize หรือ minimize ก่อน' },
      { question: 'สี่เหลี่ยมผืนผ้าเส้นรอบรูป 20 m มี constraint คือข้อใด ถ้าด้านกว้าง $x$ ยาว $y$', choices: ['$2x + 2y = 20$', '$xy = 20$', '$x + y = 20$', '$x^2 + y^2 = 20$'], correctIndex: 0, explanation: 'เส้นรอบรูป $= 2x + 2y = 20$ คือ constraint; objective คือ $A = xy$' },
    ]},
  ],
}
