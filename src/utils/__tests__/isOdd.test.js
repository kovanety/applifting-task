import { isOdd } from '../isOdd'

describe('Is odd test', () => {
  it('should return true for odd numbers', () => {
    expect(isOdd(5)).toBe(true)
  })
  it('should return false for even numbers ', () => {
    expect(isOdd(4)).toBe(false)
  })
  it('should return false for 0', () => {
    expect(isOdd(0)).toBe(false)
  })
})
