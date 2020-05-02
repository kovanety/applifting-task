import { formatThousands } from '../formatThousands'

describe('Format thousands test', () => {
  it('should keep numbers less than thousand as is', () => {
    expect(formatThousands(111)).toEqual('111')
  })
  it('should format thousands correctly ', () => {
    expect(formatThousands(1111)).toEqual('1 111')
  })
  it('should format millions correctly', () => {
    expect(formatThousands(1111111)).toEqual('1 111 111')
  })
})
