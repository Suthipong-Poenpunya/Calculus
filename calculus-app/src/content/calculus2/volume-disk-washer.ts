import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'volume-disk-washer',
  title: 'ปริมาตรโดยวิธีจาน/วงแหวน',
  course: 'calculus2',
  chapter: 'การประยุกต์ของอินทิกรัล',
  order: 7,
  estimatedMinutes: 15,
  blocks: [
    { type: 'text', content: 'หมุนบริเวณรอบแกน $x$ เกิดเป็นทรงหมุน — Disk Method (ไม่มีรู): $V = \\pi\\int_a^b [f(x)]^2\\,dx$; Washer Method (มีรู): $V = \\pi\\int_a^b \\{[f(x)]^2 - [g(x)]^2\\}\\,dx$ เมื่อ $f(x) \\geq g(x) \\geq 0$' },
    { type: 'equation', tex: 'V = \\pi\\int_a^b [f(x)]^2\\,dx', display: true },
    { type: 'example', title: 'ตัวอย่าง — ปริมาตรจากหมุน $y = \\sqrt{x}$ รอบแกน $x$, $x \\in [0,4]$', steps: [
      'Disk method: $V = \\pi\\int_0^4 (\\sqrt{x})^2\\,dx = \\pi\\int_0^4 x\\,dx$',
      '$= \\pi\\left[\\frac{x^2}{2}\\right]_0^4 = \\pi \\cdot 8 = 8\\pi$',
    ]},
    { type: 'quiz', questions: [
      { question: 'ปริมาตรจากการหมุน $y = \\sqrt{x}$ รอบแกน $x$ บน $[0,4]$ คือเท่าใด', choices: ['$8\\pi$', '$4\\pi$', '$16\\pi$', '$2\\pi$'], correctIndex: 0, explanation: '$V = \\pi\\int_0^4 x\\,dx = \\pi[x^2/2]_0^4 = 8\\pi$' },
      { question: 'Washer Method ต่างจาก Disk Method อย่างไร', choices: ['Washer ลบปริมาตรรูตรงกลางออก — ใช้เมื่อบริเวณที่หมุนมีช่องว่าง', 'Washer ใช้สำหรับหมุนรอบแกน $y$ เท่านั้น', 'Washer ให้ผลลัพธ์เหมือน Disk เสมอ', 'Washer ใช้ได้เฉพาะกับฟังก์ชัน linear'], correctIndex: 0, explanation: 'Washer: $V = \\pi\\int[R^2 - r^2]\\,dx$ โดย $R$ = outer radius, $r$ = inner radius (รัศมีรู)' },
    ]},
  ],
}
