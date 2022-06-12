import { Transition } from '/Users/danielkim/Desktop/dots-cloning/src/styles/animations.ts'
import { onMedium } from '/Users/danielkim/Desktop/dots-cloning/src/styles/mediaQueries.ts'
import { flexCenter } from '/Users/danielkim/Desktop/dots-cloning/src/styles/styleUtils.ts'
import Z_INDEX from '/Users/danielkim/Desktop/dots-cloning/src/styles/zIndex.ts'
import styled from 'styled-components'
import { Swiper } from 'swiper/react'

export const HeroBannerSwiper = styled(Swiper)`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  height: 400px;
`

export const HeroBannerContent = styled.div`
  position: relative;
  z-index: ${Z_INDEX.BASE};
  margin: 0 auto;
  height: 400px;

  ${onMedium} {
    max-width: 1024px;
  }
`

export const HeroBannerItemBox = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 25px 22px;
  width: 100%;

  ${onMedium} {
    flex-direction: row;
    max-width: 1024px;
    height: 100%;
    padding: 0 28px;
  }

  animation: ${Transition} 800ms ease 0s;
`

export const HeroTitles = styled.div`
  width: 100%;
`

export const HeroBannerTitle = styled.h2`
  white-space: pre-wrap;
  font-weight: 700;
  font-size: 25px;
  line-height: 130%;
  text-align: left;
  color: #ffffff;

  ${onMedium} {
    margin-top: 112px;
    font-size: 34px;
    line-height: 130%;
  }
`

export const HeroBannerSubTitle = styled.h4`
  margin-top: 4px;
  font-weight: 500;
  font-size: 14px;
  line-height: 135%;
  white-space: pre-wrap;
  color: #ffffff;

  ${onMedium} {
    margin-top: 10px;
    font-size: 15px;
    line-height: 143%;
  }
`

export const HeroBannerNavigation = styled.div`
  position: absolute;
  right: 0;
  bottom: 22px;
  z-index: ${Z_INDEX.Floating};
  width: 48px;
  height: 22px;

  background: rgba(34, 34, 34, 0.3);
  border-radius: 11.5px;
  padding: 7px 11.6px;
  ${flexCenter}

  span {
    font-weight: 500;
    font-size: 11.0526px;
    color: #ffffff;
  }

  ${onMedium} {
    left: 36px;
    bottom: 44px;
    z-index: ${Z_INDEX.Floating};
    width: 96px;
    height: 24px;
  }
`

export const NavButtons = styled.div`
  ${flexCenter}
  margin-left: auto;
  padding-bottom: 2px;
`

export const PrevButton = styled.div`
  margin-right: 19px;
  cursor: pointer;
`
export const NextButton = styled.div`
  transform: scaleX(-1);
  cursor: pointer;
`

export const ImageWrapper = styled.div`
  display: inline-block;
  width: auto;
  height: 270px;
  align-self: center;

  ${onMedium} {
    min-width: 532px;
    max-width: 532px;
    height: 400px;
  }
`

export function PrevNavIcon({ width = 6, height = 10 }) {
  return (
    <svg width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m0 5 5.00742 4.83555c.22707.21925.59521.21925.82228 0 .22707-.21928.22707-.57479 0-.79406L1.64456 5 5.8297.958511c.22707-.219273.22707-.574784 0-.794057-.22707-.219272-.59521-.219272-.82228 0L0 5Z"
        fill="#fff"
      />
    </svg>
  )
}