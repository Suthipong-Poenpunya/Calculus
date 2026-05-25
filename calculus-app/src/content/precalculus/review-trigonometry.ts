import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'review-trigonometry',
  title: 'แบบฝึกหัดท้ายบท — ตรีโกณมิติ',
  course: 'precalculus',
  chapter: 'ตรีโกณมิติ',
  order: 999,
  estimatedMinutes: 15,
  isChapterReview: true,
  blocks: [
    {
      type: 'text',
      content: 'ทบทวนความรู้เรื่องตรีโกณมิติ — มุม radian วงกลมหนึ่งหน่วย และเอกลักษณ์ตรีโกณมิติ',
    },
    {
      type: 'quiz',
      questions: [
        {
          question: '$180°$ เท่ากับกี่ radian',
          choices: ['$\\pi$', '$\\dfrac{\\pi}{2}$', '$2\\pi$', '$\\dfrac{\\pi}{4}$'],
          correctIndex: 0,
          explanation: '$180° = \\pi$ radian คือสูตรพื้นฐานของการแปลงหน่วย',
          lessonId: 'angles-radians',
        },
        {
          question: 'มุม $\\dfrac{5\\pi}{6}$ radian เท่ากับกี่องศา',
          choices: ['$150°$', '$120°$', '$210°$', '$300°$'],
          correctIndex: 0,
          explanation: '$\\dfrac{5\\pi}{6} \\times \\dfrac{180°}{\\pi} = \\dfrac{5 \\times 180°}{6} = 150°$',
          lessonId: 'angles-radians',
        },
        {
          question: '$\\sin\\!\\left(\\dfrac{\\pi}{2}\\right)$ มีค่าเท่าใด',
          choices: ['$1$', '$0$', '$-1$', '$\\dfrac{\\sqrt{2}}{2}$'],
          correctIndex: 0,
          explanation: 'จุดบนวงกลมหนึ่งหน่วยที่ $\\theta = \\dfrac{\\pi}{2}$ คือ $(0, 1)$ ดังนั้น $\\sin\\!\\left(\\dfrac{\\pi}{2}\\right) = 1$',
          lessonId: 'unit-circle',
        },
        {
          question: '$\\cos(\\pi)$ มีค่าเท่าใด',
          choices: ['$-1$', '$1$', '$0$', '$\\dfrac{\\sqrt{3}}{2}$'],
          correctIndex: 0,
          explanation: 'จุดบนวงกลมหนึ่งหน่วยที่ $\\theta = \\pi$ คือ $(-1, 0)$ ดังนั้น $\\cos(\\pi) = -1$',
          lessonId: 'unit-circle',
        },
        {
          question: '$\\tan\\!\\left(\\dfrac{\\pi}{4}\\right)$ มีค่าเท่าใด',
          choices: ['$1$', '$0$', '$\\sqrt{3}$', '$\\dfrac{1}{\\sqrt{3}}$'],
          correctIndex: 0,
          explanation: '$\\tan\\!\\left(\\dfrac{\\pi}{4}\\right) = \\dfrac{\\sin(\\pi/4)}{\\cos(\\pi/4)} = \\dfrac{\\sqrt{2}/2}{\\sqrt{2}/2} = 1$',
          lessonId: 'unit-circle',
        },
        {
          question: '$\\sin^2\\theta + \\cos^2\\theta$ มีค่าเท่าใด',
          choices: ['$1$', '$0$', '$2$', '$\\tan\\theta$'],
          correctIndex: 0,
          explanation: 'Pythagorean identity พื้นฐาน: $\\sin^2\\theta + \\cos^2\\theta = 1$ เสมอ',
          lessonId: 'trig-identities',
        },
        {
          question: '$\\sin(2\\theta)$ เท่ากับอะไร',
          choices: [
            '$2\\sin\\theta\\cos\\theta$',
            '$\\sin^2\\theta - \\cos^2\\theta$',
            '$2\\cos^2\\theta - 1$',
            '$\\sin\\theta + \\cos\\theta$',
          ],
          correctIndex: 0,
          explanation: 'Double angle formula: $\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta$',
          lessonId: 'trig-identities',
        },
        {
          question: '$\\cos(A + B)$ เท่ากับอะไร',
          choices: [
            '$\\cos A\\cos B - \\sin A\\sin B$',
            '$\\cos A\\cos B + \\sin A\\sin B$',
            '$\\sin A\\cos B - \\cos A\\sin B$',
            '$\\sin A\\cos B + \\cos A\\sin B$',
          ],
          correctIndex: 0,
          explanation: 'Angle addition formula: $\\cos(A+B) = \\cos A\\cos B - \\sin A\\sin B$',
          lessonId: 'trig-identities',
        },
      ],
    },
  ],
}
