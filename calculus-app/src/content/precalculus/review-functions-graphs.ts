import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'review-functions-graphs',
  title: 'แบบฝึกหัดท้ายบท — ฟังก์ชันและกราฟ',
  course: 'precalculus',
  chapter: 'ฟังก์ชันและกราฟ',
  order: 999,
  estimatedMinutes: 15,
  isChapterReview: true,
  blocks: [
    {
      type: 'text',
      content: 'ทบทวนความรู้เรื่องฟังก์ชันและกราฟ — เลือกคำตอบที่ถูกต้องที่สุดในแต่ละข้อ',
    },
    {
      type: 'quiz',
      questions: [
        {
          question: 'ถ้า $f(x) = 2x^2 - 3$ แล้ว $f(-2)$ มีค่าเท่าใด',
          choices: ['5', '1', '-11', '8'],
          correctIndex: 0,
          explanation: '$f(-2) = 2(-2)^2 - 3 = 2(4) - 3 = 5$',
          lessonId: 'functions-intro',
        },
        {
          question: 'Vertical Line Test ใช้ตรวจสอบอะไร',
          choices: [
            'ว่ากราฟเป็นฟังก์ชันหรือไม่',
            'ว่ากราฟมีค่าสูงสุดหรือไม่',
            'ว่า domain มีขอบเขตหรือไม่',
            'ว่ากราฟเป็นเส้นตรงหรือไม่',
          ],
          correctIndex: 0,
          explanation: 'Vertical Line Test: ถ้าเส้นดิ่งใดๆ ตัดกราฟมากกว่าหนึ่งจุด กราฟนั้นไม่เป็นฟังก์ชัน',
          lessonId: 'functions-intro',
        },
        {
          question: 'โดเมนของ $f(x) = \\dfrac{1}{x - 3}$ คืออะไร',
          choices: ['$x \\neq 3$', '$x > 0$', '$x \\geq 3$', '$x \\neq 0$'],
          correctIndex: 0,
          explanation: 'ตัวส่วนต้องไม่เป็นศูนย์ ดังนั้น $x - 3 \\neq 0$ นั่นคือ $x \\neq 3$',
          lessonId: 'domain-range',
        },
        {
          question: 'ถ้า $f(x) = \\sqrt{x + 4}$ แล้ว domain คือข้อใด',
          choices: ['$x \\geq -4$', '$x > 4$', '$x \\geq 4$', '$x \\neq -4$'],
          correctIndex: 0,
          explanation: 'รากที่สองต้องการค่าใต้รากไม่ติดลบ: $x + 4 \\geq 0$ จึงได้ $x \\geq -4$',
          lessonId: 'domain-range',
        },
        {
          question: '$f(x) = (x + 2)^2 - 3$ มี vertex อยู่ที่จุดใด',
          choices: ['$(-2,\\ -3)$', '$(2,\\ -3)$', '$(-2,\\ 3)$', '$(2,\\ 3)$'],
          correctIndex: 0,
          explanation: 'รูปแบบ $(x - h)^2 + k$ มี vertex ที่ $(h, k)$ — ที่นี่ $h = -2,\\ k = -3$',
          lessonId: 'graph-transformations',
        },
        {
          question: 'ถ้า $f(x) = 3x + 6$ แล้ว $f^{-1}(x)$ คืออะไร',
          choices: [
            '$\\dfrac{x - 6}{3}$',
            '$\\dfrac{x + 6}{3}$',
            '$3x - 6$',
            '$\\dfrac{x}{3} - 6$',
          ],
          correctIndex: 0,
          explanation: 'สลับ $x$ และ $y$: $x = 3y + 6 \\Rightarrow y = \\dfrac{x-6}{3}$',
          lessonId: 'inverse-functions',
        },
        {
          question: 'ถ้า $f(x) = x + 1$ และ $g(x) = x^2$ แล้ว $(f \\circ g)(3)$ มีค่าเท่าใด',
          choices: ['10', '16', '9', '4'],
          correctIndex: 0,
          explanation: '$(f \\circ g)(3) = f(g(3)) = f(9) = 9 + 1 = 10$',
          lessonId: 'composition-functions',
        },
        {
          question: 'ถ้า $f(x) = 2x$ และ $g(x) = x - 3$ แล้ว $(g \\circ f)(x)$ คืออะไร',
          choices: ['$2x - 3$', '$2x - 6$', '$2(x - 3)$', '$x - 6$'],
          correctIndex: 0,
          explanation: '$(g \\circ f)(x) = g(f(x)) = g(2x) = 2x - 3$',
          lessonId: 'composition-functions',
        },
      ],
    },
  ],
}
