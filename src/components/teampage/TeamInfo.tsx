import React, { FC, FocusEvent, useState } from 'react'
import styled from 'styled-components'
import { useLocation } from '@reach/router'

import {
  FONT_WEIGHT,
  FONT_SIZE,
  SCREEN_SIZE,
  LEADERBOARD_WIDTH,
} from '../../constants'

import { Tooltip } from '../shared/Tooltip'
import { Input } from '../shared/Input'

const Container = styled.div`
  margin: 5rem auto 1rem;
  text-align: center;
`

const InformationText = styled.div`
  font-size: ${FONT_SIZE.EXTRA_LARGE};
  margin-bottom: 5rem;
`

const Highlight = styled.span`
  font-weight: ${FONT_WEIGHT.BOLD};
`

const InputWithLabel = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  grid-column-gap: 1rem;
  max-width: ${LEADERBOARD_WIDTH};
  margin: 0 auto;
  padding: 0 2rem;

  ${SCREEN_SIZE.BELOW_MOBILE} {
    grid-template-columns: 1fr;
    grid-row-gap: 1rem;
    padding: 0;
  }
`

const Label = styled.label`
  display: flex;
  align-items: center;
  font-style: italic;

  ${SCREEN_SIZE.BELOW_MOBILE} {
    justify-content: center;
  }
`

const InputWrapper = styled.div`
  position: relative;
`

interface TeamInfoProps {
  team?: string
}

export const TeamInfo: FC<TeamInfoProps> = ({ team }) => {
  const { href } = useLocation()
  const [isCopied, setIsCopied] = useState(false)

  //Copy the contents of the input to clipboard
  const onFocus = (e: FocusEvent<HTMLInputElement>) => {
    e.target.select()
    document.execCommand('copy')
    setIsCopied(true)
  }

  const onBlur = () => setIsCopied(false)

  return (
    <Container>
      <InformationText>
        Clicking for team <Highlight>{team}</Highlight>
      </InformationText>
      <InputWithLabel>
        <Label htmlFor="copyLink">
          Too lazy to click? Let your pals click for you:{' '}
        </Label>
        <InputWrapper>
          <Tooltip isVisible={isCopied}>Copied!</Tooltip>
          <Input
            id="copyLink"
            value={href}
            isReadOnly
            onFocus={(e) => onFocus(e)}
            onBlur={onBlur}
          />
        </InputWrapper>
      </InputWithLabel>
    </Container>
  )
}
