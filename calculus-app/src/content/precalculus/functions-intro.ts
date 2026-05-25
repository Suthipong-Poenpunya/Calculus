import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'functions-intro',
  title: 'ฟังก์ชัน (Function) คืออะไร',
  course: 'precalculus',
  chapter: 'ฟังก์ชันและกราฟ',
  order: 1,
  estimatedMinutes: 15,
  blocks: [
    { type: 'text', content: 'ฟังก์ชัน (Function) คือความสัมพันธ์ที่สมาชิกแต่ละตัวใน domain จับคู่กับสมาชิกเพียงหนึ่งตัวใน range เปรียบเสมือนเครื่องจักร: ใส่ input เข้าไป จะได้ output ออกมาเสมอเพียงหนึ่งค่า' },
    { type: 'equation', tex: 'y = f(x)', display: true },
    { type: 'text', content: 'อ่านว่า "y เท่ากับ f ของ x" — x คือ input (ตัวแปรอิสระ) และ y คือ output (ตัวแปรตาม) ฟังก์ชัน f บอกวิธีคำนวณ y จาก x' },
    { type: 'example', title: 'ตัวอย่าง — หาค่าของฟังก์ชัน', steps: ['กำหนดให้ f(x) = 2x + 1', 'หาค่า f(3): แทน x = 3 → f(3) = 2(3) + 1 = 7', 'หาค่า f(−2): แทน x = −2 → f(−2) = 2(−2) + 1 = −3', 'หาค่า f(0): แทน x = 0 → f(0) = 2(0) + 1 = 1'] },
    { type: 'text', content: 'Vertical Line Test: กราฟของความสัมพันธ์ใดๆ เป็นฟังก์ชันก็ต่อเมื่อเส้นตรงในแนวดิ่งทุกเส้นตัดกราฟนั้นไม่เกินหนึ่งจุด วงกลมไม่ผ่านการทดสอบนี้ เพราะเส้นดิ่งตัดได้สองจุด' },
    { type: 'quiz', questions: [
      { question: 'ถ้า f(x) = 3x − 2 แล้ว f(4) มีค่าเท่าใด', choices: ['10', '14', '12', '6'], correctIndex: 0, explanation: 'f(4) = 3(4) − 2 = 12 − 2 = 10' },
      { question: 'คุณสมบัติสำคัญที่สุดของฟังก์ชันคือข้อใด', choices: ['input แต่ละค่าให้ output เพียงหนึ่งค่า', 'output แต่ละค่าให้ input เพียงหนึ่งค่า', 'กราฟต้องเป็นเส้นตรงเท่านั้น', 'domain ต้องเป็นจำนวนเต็มเท่านั้น'], correctIndex: 0, explanation: 'คุณสมบัติหลักของฟังก์ชัน: input แต่ละค่าจับคู่กับ output เพียงหนึ่งค่า (แต่ output เดียวกันอาจมาจากหลาย input ได้)' },
    ]},
  ],
}
