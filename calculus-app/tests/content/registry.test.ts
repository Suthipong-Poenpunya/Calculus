import { getLessonById, getLessonsByCourse, getChapters, getNextLesson, getChapterReview } from '@/content'

test('getLessonById returns lesson for known id', () => {
  const lesson = getLessonById('functions-intro')
  expect(lesson).toBeDefined()
  expect(lesson?.title).toBe('ฟังก์ชัน (Function) คืออะไร')
})

test('getLessonById returns undefined for unknown id', () => {
  expect(getLessonById('nonexistent')).toBeUndefined()
})

test('getLessonsByCourse returns lessons sorted by order', () => {
  const lessons = getLessonsByCourse('precalculus')
  expect(lessons.length).toBe(10)
  for (let i = 1; i < lessons.length; i++) {
    expect(lessons[i].order).toBeGreaterThan(lessons[i - 1].order)
  }
})

test('getChapters returns unique chapters in traversal order', () => {
  const chapters = getChapters('precalculus')
  expect(new Set(chapters).size).toBe(chapters.length)
  expect(chapters).toContain('ฟังก์ชันและกราฟ')
})

test('getNextLesson returns next lesson in same course', () => {
  const next = getNextLesson('functions-intro')
  expect(next?.id).toBe('domain-range')
})

test('getNextLesson returns undefined for last lesson in course', () => {
  expect(getNextLesson('logarithm-functions')).toBeUndefined()
})

test('getLessonsByCourse excludes chapter reviews', () => {
  const lessons = getLessonsByCourse('precalculus')
  expect(lessons.every((l) => !l.isChapterReview)).toBe(true)
})

test('getChapterReview returns review for calculus1 chapter', () => {
  const review = getChapterReview('calculus1', 'ลิมิตและความต่อเนื่อง')
  expect(review).toBeDefined()
  expect(review?.isChapterReview).toBe(true)
  expect(review?.id).toBe('review-limits-continuity')
})

test('getChapterReview returns review for precalculus chapter', () => {
  const review = getChapterReview('precalculus', 'ฟังก์ชันและกราฟ')
  expect(review).toBeDefined()
  expect(review?.isChapterReview).toBe(true)
  expect(review?.id).toBe('review-functions-graphs')
})

test('getLessonsByCourse still returns 10 for precalculus after adding reviews', () => {
  const lessons = getLessonsByCourse('precalculus')
  expect(lessons).toHaveLength(10)
})

test('getLessonById finds review lesson by id', () => {
  const review = getLessonById('review-functions-graphs')
  expect(review).toBeDefined()
  expect(review?.isChapterReview).toBe(true)
})

test('getLessonsByCourse returns 17 lessons for calculus1 (excluding reviews)', () => {
  const lessons = getLessonsByCourse('calculus1')
  expect(lessons).toHaveLength(17)
  expect(lessons.every((l) => !l.isChapterReview)).toBe(true)
})

test('getChapters returns 5 chapters for calculus1 in traversal order', () => {
  const chapters = getChapters('calculus1')
  expect(chapters).toHaveLength(5)
  expect(chapters[0]).toBe('ลิมิตและความต่อเนื่อง')
  expect(chapters[4]).toBe('อินทิกรัลเบื้องต้น')
})

test('getLessonById finds calculus1 lesson by id', () => {
  const lesson = getLessonById('limit-definition')
  expect(lesson).toBeDefined()
  expect(lesson?.course).toBe('calculus1')
})

test('getNextLesson works within calculus1 chapter', () => {
  const next = getNextLesson('limit-definition')
  expect(next?.id).toBe('limit-laws')
})

test('getNextLesson crosses chapters within calculus1', () => {
  const next = getNextLesson('continuity')
  expect(next?.id).toBe('derivative-definition')
})

test('getNextLesson returns undefined for last calculus1 lesson', () => {
  expect(getNextLesson('fundamental-theorem')).toBeUndefined()
})

test('getChapterReview returns review for calculus1 บท 5', () => {
  const review = getChapterReview('calculus1', 'อินทิกรัลเบื้องต้น')
  expect(review).toBeDefined()
  expect(review?.id).toBe('review-integrals')
  expect(review?.isChapterReview).toBe(true)
})

test('getLessonsByCourse returns 20 lessons for calculus2 (excluding reviews)', () => {
  const lessons = getLessonsByCourse('calculus2')
  expect(lessons).toHaveLength(20)
  expect(lessons.every((l) => !l.isChapterReview)).toBe(true)
})

test('getChapters returns 4 chapters for calculus2 in traversal order', () => {
  const chapters = getChapters('calculus2')
  expect(chapters).toHaveLength(4)
  expect(chapters[0]).toBe('เทคนิคการอินทิเกรต')
  expect(chapters[3]).toBe('อนุกรมกำลังและอนุกรมเทย์เลอร์')
})

test('getLessonById finds calculus2 lesson by id', () => {
  const lesson = getLessonById('integration-by-parts')
  expect(lesson).toBeDefined()
  expect(lesson?.course).toBe('calculus2')
})

test('getNextLesson works within calculus2', () => {
  const next = getNextLesson('integration-by-parts')
  expect(next?.id).toBe('trig-integrals')
})

test('getNextLesson returns undefined for last calculus2 lesson', () => {
  expect(getNextLesson('taylor-remainder')).toBeUndefined()
})

test('getChapterReview returns review for calculus2 บท 1', () => {
  const review = getChapterReview('calculus2', 'เทคนิคการอินทิเกรต')
  expect(review).toBeDefined()
  expect(review?.id).toBe('review-integration-techniques')
  expect(review?.isChapterReview).toBe(true)
})

test('getChapterReview returns review for calculus2 บท 4', () => {
  const review = getChapterReview('calculus2', 'อนุกรมกำลังและอนุกรมเทย์เลอร์')
  expect(review).toBeDefined()
  expect(review?.id).toBe('review-power-taylor')
})
