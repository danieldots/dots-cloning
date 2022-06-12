import { css } from 'styled-components'

export const NonSelectableAndDraggable = css`
  pointer-events: none;
  user-drag: none;
  -webkit-user-select: none !important;
  -moz-user-select: -moz-none !important;
  -ms-user-select: none !important;
  user-select: none !important;
`
