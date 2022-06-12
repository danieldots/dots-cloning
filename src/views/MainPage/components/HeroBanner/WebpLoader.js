import styled from 'styled-components'


function WebpLoader({ src, width, height }) {
  const webpUrl =
    src +
    (width ? `?w=${width * 2}` : '') +
    (!width && height ? `?h=${height * 2}` : '') +
    (width && height ? `&h=${height * 2}` : '') +
    (width || height ? '&webp=true' : '?webp=true')

  const imgUrl = src + (width ? `?w=${width * 2}` : '') + (height ? `&h=${height * 2}` : '')

  return (
    <picture>
      <source srcSet={webpUrl} type="image/webp" />
      <CoveredImg src={imgUrl} alt="jpeg" />
    </picture>
  )
}

const CoveredImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export default WebpLoader
