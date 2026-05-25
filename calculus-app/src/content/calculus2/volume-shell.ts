import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'volume-shell',
  title: 'ปริมาตรโดยวิธีเปลือก (Shell Method)',
  course: 'calculus2',
  chapter: 'การประยุกต์ของอินทิกรัล',
  order: 8,
  estimatedMinutes: 15,
  blocks: [
    { type: 'text', content: 'Shell Method ใช้หาปริมาตรทรงหมุนรอบแกน $y$: $V = 2\\pi\\int_a^b x\\,f(x)\\,dx$ — คิดเป็นเปลือกทรงกระบอกบางๆ รัศมี $x$ สูง $f(x)$ หนา $dx$ เหมาะกว่า Disk เมื่อ cross-section เป็น washer ที่ยากต่อการแสดง' },
    { type: 'equation', tex: 'V = 2\\pi\\int_a^b x\\,f(x)\\,dx', display: true },
    { type: 'example', title: 'ตัวอย่าง — ปริมาตรจากหมุน $y = x^2$ รอบแกน $y$, $x \\in [0,2]$', steps: [
      'Shell method: $V = 2\\pi\\int_0^2 x \\cdot x^2\\,dx = 2\\pi\\int_0^2 x^3\\,dx$',
      '$= 2\\pi\\left[\\frac{x^4}{4}\\right]_0^2 = 2\\pi \\cdot 4 = 8\\pi$',
    ]},
    { type: 'quiz', questions: [
      { question: 'ปริมาตรจากการหมุน $y = x^2$ รอบแกน $y$ บน $[0,2]$ ด้วย Shell Method คือเท่าใด', choices: ['$8\\pi$', '$4\\pi$', '$16\\pi$', '$2\\pi$'], correctIndex: 0, explanation: '$V = 2\\pi\\int_0^2 x^3\\,dx = 2\\pi[x^4/4]_0^2 = 2\\pi(4) = 8\\pi$' },
      { question: 'Shell Method เหมาะใช้เมื่อใด', choices: ['หมุนรอบแกน $y$ และ cross-section เป็นรูปที่ยากต่อการแสดงด้วย Disk', 'หมุนรอบแกน $x$ เท่านั้น', 'ทุกกรณีที่ใช้ Disk ได้', 'เมื่อฟังก์ชันเป็น quadratic เท่านั้น'], correctIndex: 0, explanation: 'Shell ดีกว่า Disk เมื่อหมุนรอบแกน $y$ และต้องการหลีกเลี่ยงการ express $x$ เป็น function ของ $y$' },
    ]},
  ],
}
