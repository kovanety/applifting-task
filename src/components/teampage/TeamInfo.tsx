import React, { FC, FocusEvent, useState } from 'react'
import styled from 'styled-components'
import { useLocation } from '@reach/router'

import {
  FONT_WEIGHT,
  FONT_SIZE,
  BORDER_RADIUS,
  TEXT_COLOR,
} from '../../constants'
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
  display: flex;
  justify-content: center;
  align-items: center;
`

const Label = styled.label`
  margin-right: 1rem;
  font-style: italic;
`

const InputWrapper = styled.div`
  position: relative;
`

const CopiedTooltip = styled.div<{ isVisible: boolean }>`
  position: absolute;
  bottom: 140%;
  left: 50%;
  padding: 0.5rem;
  transform: translateX(-50%);
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  background: rgba(0, 0, 0, 0.8);
  border-radius: ${BORDER_RADIUS};
  color: ${TEXT_COLOR.WHITE};
  transition: opacity 0.3s;

  ::after {
    content: ' ';
    position: absolute;
    width: 0;
    height: 0;
    top: 100%;
    left: 50%;
    transform: translate(-50%);
    border: 1rem solid;
    border-color: rgba(0, 0, 0, 0.8) transparent transparent transparent;
  }
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
          <CopiedTooltip isVisible={isCopied}>Copied!</CopiedTooltip>
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
