import { useCallback } from 'react'
import { debounce } from 'throttle-debounce'
import { useDispatch } from 'react-redux'

import { getScores } from '../actions/getScores'

//Delay the leaderboard fetch to improve performance
export const useDebounceScoreFetch = () => {
  const dispatch = useDispatch()

  const debounceFetch = useCallback(
    debounce(200, () => dispatch(getScores())),
    []
  )

  return debounceFetch
}
