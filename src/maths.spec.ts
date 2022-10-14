import { isOdd } from './maths'

test('isOdd should be true for odd numbers', () => {
  expect(isOdd(57)).toBeTruthy()
})
test('isOdd should be false for even numbers', () => {
  expect(isOdd(40)).toBeFalsy()
})