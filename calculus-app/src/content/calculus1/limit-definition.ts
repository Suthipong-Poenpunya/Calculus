import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'limit-definition',
  title: 'นิยามของลิมิต',
  course: 'calculus1',
  chapter: 'ลิมิตและความต่อเนื่อง',
  order: 1,
  estimatedMinutes: 15,
  blocks: [
    { type: 'text', content: 'ลิมิต (Limit) บอกว่าค่าของฟังก์ชัน f(x) เข้าใกล้อะไร เมื่อ x เข้าใกล้ค่าหนึ่ง — โดยไม่จำเป็นต้องเท่ากับค่านั้น เราเขียน lim_{x→a} f(x) = L หมายความว่า "เมื่อ x เข้าใกล้ a ค่า f(x) เข้าใกล้ L"' },
    { type: 'equation', tex: '\\lim_{x \\to a} f(x) = L', display: true },
    { type: 'text', content: 'ข้อสังเกตสำคัญ: ค่าลิมิต L อาจไม่เท่ากับ f(a) และฟังก์ชันไม่จำเป็นต้องนิยามที่ x = a ด้วยซ้ำ เราแค่สนใจพฤติกรรมของฟังก์ชันรอบๆ จุด a' },
    { type: 'example', title: 'ตัวอย่าง — หาลิมิตโดย Direct Substitution', steps: [
      'หา $\\lim_{x \\to 2}(x^2 - 1)$',
      'ลอง substitution: แทน $x = 2$ ลงในฟังก์ชัน',
      '$2^2 - 1 = 4 - 1 = 3$',
      'ดังนั้น $\\lim_{x \\to 2}(x^2 - 1) = 3$',
    ]},
    { type: 'visualizer', name: 'LimitsVisualizer' },
    { type: 'quiz', questions: [
      { question: '$\\lim_{x \\to 3}(2x + 1)$ มีค่าเท่าใด', choices: ['7', '5', '9', '6'], correctIndex: 0, explanation: 'แทน $x = 3$: $2(3) + 1 = 7$' },
      { question: 'ข้อใดถูกต้องเกี่ยวกับลิมิต $\\lim_{x \\to a} f(x)$', choices: ['ค่าลิมิตอาจไม่เท่ากับ $f(a)$', 'ฟังก์ชันต้องนิยามที่ $x = a$', 'ลิมิตมีอยู่เสมอสำหรับทุกจุด', 'ค่าลิมิตต้องเป็นจำนวนจริงเสมอ'], correctIndex: 0, explanation: 'ลิมิตอธิบายพฤติกรรม "รอบๆ" จุด $a$ ไม่ใช่ "ที่" จุด $a$ ฟังก์ชันอาจไม่นิยามที่ $a$ ก็ได้' },
    ]},
  ],
}
