import { FC, useCallback, useState } from "react";
import styled, { keyframes } from "styled-components";
import SwiperCore, { FreeMode, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { HorizontalSliderCard } from "components/HorizontalSliderCard";
import { SliderButton } from "components/UI/SliderButton";
import { device } from "utils/devicesBreakpoints";
import sliderData from "data.json";

export const HorizontalSlider: FC<{ curSlide: number }> = ({ curSlide }) => {
  const [swiperRef, setSwiperRef] = useState<SwiperCore>();

  const handlePrevButton = useCallback(() => {
    if (!swiperRef) return;
    swiperRef.slidePrev();
  }, [swiperRef]);

  const handleNextButton = useCallback(() => {
    if (!swiperRef) return;
    swiperRef.slideNext();
  }, [swiperRef]);

  const SliderOptions = {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 80,
    grabCursor: true,
    freeMode: true,
    navigation: {
      nextEl: ".slider-next-button",
      prevEl: ".slider-prev-button"
    },
    pagination: false,
    breakpoints: {
      1440: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 80
      },
      900: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30
      },
      600: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 25
      },
      250: {
        slidesPerView: 1.5,
        slidesPerGroup: 1.5,
        spaceBetween: 25
      }
    },
    modules: [Navigation, FreeMode]
  };

  return (
    <SliderWrap>
      <SliderButton
        className="slider-next-button"
        onClick={handleNextButton}
        next
        secondary
      />
      <SliderButton
        className="slider-prev-button"
        onClick={handlePrevButton}
        prev
        secondary
      />
      <Swiper
        key={"animateItDud"}
        {...SliderOptions}
        onSwiper={(swiper) => setSwiperRef(swiper)}
      >
        {sliderData[curSlide - 1].map((item) => {
          return (
            <SwiperSlide key={item.title}>
              <HorizontalSliderCard {...item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SliderWrap>
  );
};

const fadeIn = keyframes`
  0% {
    opacity: 0
  }
  80% {
    opacity: 0.001
  }
  100% {
    opacity: 1
  }
`;

const SliderWrap = styled.div`
  position: relative;
  margin-top: 56px;
  padding: 0 80px;

  .swiper {
    width: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    animation: 1.5s ${fadeIn} ease-in-out;
  }

  .swiper-button {
    &-disabled {
      opacity: 0;
    }
  }

  @media ${device.laptop} {
    padding: 0 30px;
    min-height: 136px;
  }
  @media ${device.tablet} {
    margin-top: 32px;
  }
  @media ${device.mobile} {
    padding: 0;
    margin-bottom: 141px;
    margin-top: 233px;
    padding-top: 20px;
    height: 134px;
    &::before {
      position: absolute;
      top: 0px;
      left: 0px;
      content: "";
      width: calc(100% - 20px);
      height: 1px;
      background-color: var(--gray);
    }
    .swiper-slide {
      animation: 0.5s ${fadeIn} ease-in-out;
    }
  }
`;
