import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperClass, { Autoplay } from 'swiper'
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import * as S from './HeroBanner.style'
import { useEffect, useState } from "react";
import axios from 'axios';
import WebpLoader from "./WebpLoader";

SwiperCore.use([Navigation, Pagination]);

const HeroBanner = () => {
    const [data, setDatas] = useState([]);
    useEffect(() => {
        axios.get('https://dev-api.schooldots.me/banner?type=MAIN_HERO')
            .then(response => {
                setDatas(response.data)
            }) 
    }, [data]);
    const [banner, setBanner] = useState();
    const [bannerIndex, setBannerIndex] = useState(0);

    const handleChange = () => {
        if (!banner) return
        setBannerIndex(banner?.realIndex)
      }
    
      const handleClickPrev = () => {
        banner?.slidePrev()
      }
    
      const handleClickNext = () => {
        banner?.slideNext()
      }
    
      if (!data) return null
    
      const commonBannerStyles = data[bannerIndex]?.styles

    const navigateToUrl = (url) => {
        if (!url) return
        window.location.href = url
      }


    return (
        <S.HeroBannerContent>
            <S.HeroBannerNavigation>
                <span>
                    {bannerIndex + 1} / {data?.length}
                </span>
                    <S.NavButtons
                        navigation>
                        <S.PrevButton onClick={handleClickPrev}>
                            <svg width="6" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="m0 5 5.00742 4.83555c.22707.21925.59521.21925.82228 0 .22707-.21928.22707-.57479 0-.79406L1.64456 5 5.8297.958511c.22707-.219273.22707-.574784 0-.794057-.22707-.219272-.59521-.219272-.82228 0L0 5Z"
                                    fill="#fff"
                                />
                            </svg>
                        </S.PrevButton>
                        <S.NextButton onClick={handleClickNext}>
                            <svg width="6" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="m0 5 5.00742 4.83555c.22707.21925.59521.21925.82228 0 .22707-.21928.22707-.57479 0-.79406L1.64456 5 5.8297.958511c.22707-.219273.22707-.574784 0-.794057-.22707-.219272-.59521-.219272-.82228 0L0 5Z"
                                    fill="#fff"
                                />
                            </svg>
                        </S.NextButton>
                    </S.NavButtons>
              
            </S.HeroBannerNavigation>
            <S.HeroBannerSwiper
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                onSwiper={setBanner}
                modules={[Autoplay]}
                style={{...commonBannerStyles}}
                onTransitionEnd={handleChange}
            >
                {data?.map((item, idx) => (
                    <SwiperSlide 
                        key={idx}
                        onClick={() => navigateToUrl(item?.url)}>
                        <S.HeroBannerItemBox>
                            <S.HeroTitles>
                                <S.HeroBannerTitle style={{ ...item?.title.style }}>{item.title.content}</S.HeroBannerTitle>
                                <S.HeroBannerSubTitle style={{ ...item?.subTitle.style }}>
                                    {item.subTitle.content}
                                </S.HeroBannerSubTitle>
                            </S.HeroTitles>
                            <S.ImageWrapper>
                                <WebpLoader src={item.image} />
                            </S.ImageWrapper>
                        </S.HeroBannerItemBox>
                    </SwiperSlide>
                ))}
            </S.HeroBannerSwiper>
        </S.HeroBannerContent>
    )
}

export default HeroBanner;
