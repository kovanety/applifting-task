import React, { FC } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import { selectSession } from '../../selectors/sessionSelectors'
import { handleClick } from '../../actions/handleClick'
import { BUTTON_PADDING } from '../../constants'
import { RESTMethods } from '../../constants/RESTmethods'
import { socketClient } from '../../utils/socketClient'
import { useDebounceScoreFetch } from '../../utils/useDebounceScoreFetch'

import { Button } from '../../components/Button'

const ButtonContainer = styled.div`
  padding: 1rem;
`

interface ClickButtonProps {
  team: string
}

export const ClickButton: FC<ClickButtonProps> = ({ team }) => {
  const dispatch = useDispatch()
  const session = useSelector(selectSession)
  const fetchScores = useDebounceScoreFetch()

  const onButtonClick = () => {
    dispatch(handleClick(session, team, RESTMethods.POST))
    //Send message to other users
    socketClient.emit('click', team, session)
    fetchScores()
  }

  return (
    <ButtonContainer>
      <Button onClick={onButtonClick} padding={BUTTON_PADDING.LARGE}>
        Click!
      </Button>
    </ButtonContainer>
  )
}
