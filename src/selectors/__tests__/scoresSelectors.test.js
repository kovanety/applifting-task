import {
  selectSurroundingClickers,
  selectTopTenClickers,
} from '../scoreSelectors'
import { MOCK_SCORES } from '../../__mocks__/scores'

describe('Surrounding clickers selector test', () => {
  it('should return the first seven scores', () => {
    expect(
      selectSurroundingClickers('Dom')({
        scoreReducer: { scores: MOCK_SCORES },
      })
    ).toEqual([...MOCK_SCORES].slice(0, 7))
  })

  it('should return the last seven clickers', () => {
    expect(
      selectSurroundingClickers('Weidar')({
        scoreReducer: { scores: MOCK_SCORES },
      })
    ).toEqual([...MOCK_SCORES].slice(13, 20))
  })
  it('should return the surrounding clickers', () => {
    expect(
      selectSurroundingClickers('Lori')({
        scoreReducer: { scores: MOCK_SCORES },
      })
    ).toEqual([...MOCK_SCORES].slice(5, 12))
  })
})

describe('Top ten clickers selector test', () => {
  it('should return first 10 teams', () => {
    const topTenClickers = selectTopTenClickers({
      scoreReducer: { scores: MOCK_SCORES },
    })

    expect(topTenClickers).toEqual([...MOCK_SCORES].slice(0, 10))
  })
})
