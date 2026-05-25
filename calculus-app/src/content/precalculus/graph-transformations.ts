import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'graph-transformations',
  title: 'การแปลงกราฟ (Graph Transformations)',
  course: 'precalculus',
  chapter: 'ฟังก์ชันและกราฟ',
  order: 3,
  estimatedMinutes: 20,
  blocks: [
    { type: 'text', content: 'เราสามารถสร้างกราฟของฟังก์ชันใหม่ได้จากกราฟเดิม โดยการเลื่อน สะท้อน ยืด หรือหด เข้าใจหลักการเหล่านี้แล้วจะวาดกราฟได้รวดเร็วโดยไม่ต้องคำนวณทุกจุด' },
    { type: 'equation', tex: 'y = f(x) + c \\quad\\Rightarrow\\quad \\text{เลื่อนขึ้น } c \\text{ หน่วย}', display: true },
    { type: 'equation', tex: 'y = f(x - h) \\quad\\Rightarrow\\quad \\text{เลื่อนขวา } h \\text{ หน่วย}', display: true },
    { type: 'equation', tex: 'y = -f(x) \\quad\\Rightarrow\\quad \\text{สะท้อนผ่านแกน } x', display: true },
    { type: 'example', title: 'ตัวอย่าง — แปลงกราฟจาก y = x²', steps: ['กราฟต้นแบบ: y = x² (พาราโบลาหงาย จุดยอดที่จุดกำเนิด)', 'y = x² + 3: เลื่อนขึ้น 3 หน่วย → จุดยอดย้ายไป (0, 3)', 'y = (x − 2)²: เลื่อนขวา 2 หน่วย → จุดยอดย้ายไป (2, 0)', 'y = (x − 2)² + 3: เลื่อนขวา 2 และขึ้น 3 → จุดยอดที่ (2, 3)', 'y = −x²: สะท้อนผ่านแกน x → พาราโบลาคว่ำ'] },
    { type: 'quiz', questions: [
      { question: 'กราฟ y = f(x − 4) เปรียบเทียบกับ y = f(x) คืออะไร', choices: ['เลื่อนขวา 4 หน่วย', 'เลื่อนซ้าย 4 หน่วย', 'เลื่อนขึ้น 4 หน่วย', 'สะท้อนผ่านแกน y'], correctIndex: 0, explanation: 'y = f(x − h) เลื่อนกราฟขวา h หน่วย เพราะต้องใช้ x ที่ใหญ่กว่าเดิม h หน่วยเพื่อให้ได้ค่า y เดิม' },
      { question: 'จุดยอดของ y = (x + 1)² − 5 อยู่ที่ใด', choices: ['(−1, −5)', '(1, −5)', '(−1, 5)', '(1, 5)'], correctIndex: 0, explanation: 'y = (x − (−1))² + (−5) เลื่อนซ้าย 1 หน่วยและลง 5 หน่วย → จุดยอดที่ (−1, −5)' },
    ]},
  ],
}
