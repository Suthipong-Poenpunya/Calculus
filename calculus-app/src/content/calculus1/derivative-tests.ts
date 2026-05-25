import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'derivative-tests',
  title: 'First & Second Derivative Test',
  course: 'calculus1',
  chapter: 'การประยุกต์ของอนุพันธ์',
  order: 13,
  estimatedMinutes: 15,
  blocks: [
    { type: 'text', content: "First Derivative Test: ดูเครื่องหมายของ $f'$ รอบ critical point — ถ้าเปลี่ยนจาก + เป็น − คือ local max, − เป็น + คือ local min Second Derivative Test: ถ้า $f'(c) = 0$ และ $f''(c) > 0$ คือ local min, $f''(c) < 0$ คือ local max" },
    { type: 'equation', tex: "f''(c) > 0 \\Rightarrow \\text{local min} \\qquad f''(c) < 0 \\Rightarrow \\text{local max}", display: true },
    { type: 'example', title: 'ตัวอย่าง — Second Derivative Test', steps: [
      'จำแนก critical points ของ $f(x) = x^3 - 3x$',
      'Critical points ที่ $x = 1$ และ $x = -1$',
      "$f''(x) = 6x$",
      "$f''(1) = 6 > 0$ → local min ที่ $x = 1$",
      "$f''(-1) = -6 < 0$ → local max ที่ $x = -1$",
    ]},
    { type: 'quiz', questions: [
      { question: "ถ้า $f'(c) = 0$ และ $f''(c) = -4$ จุด $c$ คืออะไร", choices: ['Local maximum', 'Local minimum', 'Saddle point', 'Inflection point'], correctIndex: 0, explanation: "$f''(c) < 0$ → กราฟเว้าลง → local maximum" },
      { question: "ถ้า $f'$ เปลี่ยนจากลบเป็นบวกที่ $x = c$ แล้ว $c$ คืออะไร", choices: ['Local minimum', 'Local maximum', 'Inflection point', 'Critical point ที่ไม่ใช่ extremum'], correctIndex: 0, explanation: "เครื่องหมาย $f'$: − → + หมายความว่า $f$ ลดแล้วเพิ่ม → local min" },
    ]},
  ],
}
