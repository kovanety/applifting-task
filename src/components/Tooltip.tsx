import styled from 'styled-components'
import { BORDER_RADIUS, TEXT_COLOR } from '../constants'

export const Tooltip = styled.div<{ isVisible: boolean }>`
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
