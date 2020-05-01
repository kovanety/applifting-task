import React, { FC } from 'react'
import styled from 'styled-components'

import {
  FONT_SIZE,
  BUTTON_PADDING,
  COLOR,
  BORDER_RADIUS,
  FONT_WEIGHT,
  TEXT_COLOR,
} from '../../constants'

const StyledButton = styled.button<{ padding: ButtonPaddingValues }>`
  width: 100%;
  padding: ${({ padding }) => padding};
  border-radius: ${BORDER_RADIUS};
  background-size: 200% 100%;
  background-image: linear-gradient(
    to right,
    ${COLOR.PRIMARY_BLUE} 50%,
    ${COLOR.DARK_BLUE} 50%
  );
  font-size: ${FONT_SIZE.LARGE};
  font-weight: ${FONT_WEIGHT.BOLD};
  color: ${TEXT_COLOR.WHITE};
  text-transform: uppercase;
  cursor: pointer;
  transition: background-position 0.7s;

  :hover {
    background-position: -100% 0;
  }
`

type ButtonPaddingKeys = keyof typeof BUTTON_PADDING
type ButtonPaddingValues = typeof BUTTON_PADDING[ButtonPaddingKeys]

interface ButtonProps {
  onClick: () => void
  padding?: ButtonPaddingValues
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  padding = BUTTON_PADDING.SMALL,
}) => (
  <StyledButton onClick={onClick} padding={padding}>
    {children}
  </StyledButton>
)
