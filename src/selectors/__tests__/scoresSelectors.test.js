import {
  selectSurroundingClickers,
  selectTopTenClickers,
} from '../scoreSelectors'
import { MockScores } from '../../__mocks__/scores'

describe('Surrounding clickers selector test', () => {
  it('should return the first seven scores', () => {
    expect(
      selectSurroundingClickers('Dom')({ scoreReducer: { scores: MockScores } })
    ).toEqual([...MockScores].slice(0, 7))
  })

  it('should return the last seven clickers', () => {
    expect(
      selectSurroundingClickers('Weidar')({
        scoreReducer: { scores: MockScores },
      })
    ).toEqual([...MockScores].slice(13, 20))
  })
  it('should return the surrounding clickers', () => {
    expect(
      selectSurroundingClickers('Lori')({
        scoreReducer: { scores: MockScores },
      })
    ).toEqual([...MockScores].slice(5, 12))
  })
})

describe('Top ten clickers selector test', () => {
  it('should return first 10 teams', () => {
    const topTenClickers = selectTopTenClickers({
      scoreReducer: { scores: MockScores },
    })

    expect(topTenClickers).toEqual([...MockScores].slice(0, 10))
  })
})
