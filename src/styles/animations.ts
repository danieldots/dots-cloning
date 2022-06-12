import { keyframes } from 'styled-components'

export const liftTop = keyframes`
from {
  transform: translateY(20px);
  opacity: 0;
}

to {
  transform: translateY(0);
  opacity: 1;
}
`

export const ToastTop = keyframes`
from {
  transform: translateY(60px);
  opacity: 0;
}

to {
  transform: translateY(0);
  opacity: 1;
}
`

export const liftBottom = keyframes`
from {
  transform: translateY(-20px);
  visibility: hidden;
  opacity: 0;
}

to {
  transform: translateY(0);
  visibility: visible;
  opacity: 1;
  
}
`

export const Transition = keyframes`
from {
  visibility: hidden;
  opacity: 0;
}

to {
  visibility: visible;
  opacity: 1;
  
}
`
