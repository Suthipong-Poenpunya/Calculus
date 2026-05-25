import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'review-exp-log',
  title: 'แบบฝึกหัดท้ายบท — Exponential และ Logarithm',
  course: 'precalculus',
  chapter: 'ฟังก์ชัน Exponential และ Logarithm',
  order: 999,
  estimatedMinutes: 15,
  isChapterReview: true,
  blocks: [
    {
      type: 'text',
      content: 'ทบทวนความรู้เรื่องฟังก์ชัน Exponential และ Logarithm — เลือกคำตอบที่ถูกต้องที่สุด',
    },
    {
      type: 'quiz',
      questions: [
        {
          question: '$2^3 \\cdot 2^{-1}$ มีค่าเท่าใด',
          choices: ['$4$', '$8$', '$2$', '$16$'],
          correctIndex: 0,
          explanation: '$2^3 \\cdot 2^{-1} = 2^{3-1} = 2^2 = 4$',
          lessonId: 'exponential-functions',
        },
        {
          question: '$(2^3)^2$ มีค่าเท่าใด',
          choices: ['$64$', '$32$', '$16$', '$8$'],
          correctIndex: 0,
          explanation: '$(2^3)^2 = 2^{3 \\times 2} = 2^6 = 64$',
          lessonId: 'exponential-functions',
        },
        {
          question: 'ถ้า $f(x) = 3^x$ แล้ว $f(0)$ มีค่าเท่าใด',
          choices: ['$1$', '$0$', '$3$', '$-1$'],
          correctIndex: 0,
          explanation: '$a^0 = 1$ สำหรับทุก $a \\neq 0$ ดังนั้น $f(0) = 3^0 = 1$',
          lessonId: 'exponential-functions',
        },
        {
          question: '$\\log_2(16)$ มีค่าเท่าใด',
          choices: ['$4$', '$8$', '$3$', '$2$'],
          correctIndex: 0,
          explanation: '$\\log_2(16) = 4$ เพราะ $2^4 = 16$',
          lessonId: 'logarithm-functions',
        },
        {
          question: '$\\log_{10}(1000)$ มีค่าเท่าใด',
          choices: ['$3$', '$10$', '$2$', '$100$'],
          correctIndex: 0,
          explanation: '$\\log_{10}(1000) = 3$ เพราะ $10^3 = 1000$',
          lessonId: 'logarithm-functions',
        },
        {
          question: '$\\ln(e^2)$ มีค่าเท่าใด',
          choices: ['$2$', '$e$', '$1$', '$4$'],
          correctIndex: 0,
          explanation: '$\\ln(e^2) = 2$ เพราะ $\\ln$ และ $e^x$ เป็นฟังก์ชันผกผันของกัน',
          lessonId: 'logarithm-functions',
        },
        {
          question: '$\\log(AB)$ เท่ากับอะไร (กฎของ logarithm)',
          choices: [
            '$\\log A + \\log B$',
            '$\\log A - \\log B$',
            '$\\log A \\cdot \\log B$',
            '$\\dfrac{\\log A}{\\log B}$',
          ],
          correctIndex: 0,
          explanation: 'กฎการคูณ: $\\log(AB) = \\log A + \\log B$',
          lessonId: 'logarithm-functions',
        },
        {
          question: '$\\log\\!\\left(\\dfrac{A}{B}\\right)$ เท่ากับอะไร',
          choices: [
            '$\\log A - \\log B$',
            '$\\log A + \\log B$',
            '$B \\cdot \\log A$',
            '$\\dfrac{\\log A}{\\log B}$',
          ],
          correctIndex: 0,
          explanation: 'กฎการหาร: $\\log\\!\\left(\\dfrac{A}{B}\\right) = \\log A - \\log B$',
          lessonId: 'logarithm-functions',
        },
      ],
    },
  ],
}
