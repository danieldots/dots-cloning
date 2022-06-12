import { css } from 'styled-components'
import toast from 'react-hot-toast'

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const fillParent = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

export const fillFullWidthToScreen = css`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
`

export const callCommonToasters = (
  message: string,
  options?: { isFail?: boolean; id?: string; marginTop?: string }
) => {
  if (options?.isFail) {
    toast(message, {
      style: {
        width: '630px',
        height: '58px',
        background: '#383838',
        padding: '22px 18px',
        color: '#fff',
        fontWeight: 500,
        fontSize: '14px',
        borderRadius: '3px',
        marginTop: options?.marginTop,
      },
      id: options?.id,
    })
  }
  toast.success(message, {
    style: {
      width: '630px',
      height: '58px',
      background: '#383838',
      padding: '22px 18px',
      color: '#fff',
      fontWeight: 500,
      fontSize: '14px',
      borderRadius: '3px',
      marginTop: options?.marginTop,
    },
    iconTheme: {
      primary: '#2CDF94',
      secondary: '#fff',
    },
    id: options?.id,
  })
}
