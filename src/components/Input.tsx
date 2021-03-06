import React, { ChangeEvent, FC, FocusEvent } from 'react'
import styled from 'styled-components'
import { COLOR, TEXT_COLOR, BORDER_RADIUS, FONT_SIZE } from '../constants'

const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem 0.8rem;
  background: ${COLOR.WHITE};
  border-radius: ${BORDER_RADIUS};
  border: 1px solid ${COLOR.GREY};
  font-size: ${FONT_SIZE.BASE};
  font-style: italic;

  ::placeholder {
    color: ${TEXT_COLOR.GREY};
  }
`

interface InputProps {
  id: string
  value: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void
  onBlur?: () => void
  placeholder?: string
  isReadOnly?: boolean
}

export const Input: FC<InputProps> = ({
  id,
  value,
  onChange,
  onFocus,
  onBlur,
  placeholder,
  isReadOnly = false,
}) => (
  <StyledInput
    id={id}
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    placeholder={placeholder}
    value={value}
    readOnly={isReadOnly}
    type="text"
  />
)
