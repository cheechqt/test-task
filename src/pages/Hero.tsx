import { FC, useState } from "react";
import styled from "styled-components";
import { HorizontalSlider } from "components/HorizontalSlider";
import { RoundedSlider } from "components/RoundedSlider";
import { SlidersNavigation } from "components/SlidersNavigation";
import { SlideNumbers } from "components/SlideNumbers";
import { device } from "utils/devicesBreakpoints";
import data from "data.json";

export const Hero: FC = () => {
  const [curSlide, setCurSlide] = useState<number>(data.length);

  const changeCurSlide = (target: number): void => {
    setCurSlide(target);
  };

  return (
    <Wrapper>
      <BackgroundElements />
      <SlideNumbers curSlide={curSlide} />
      <HeroWrapper>
        <Title>Исторические даты</Title>
        <RoundedSlider changeCurSlide={changeCurSlide} curSlide={curSlide} />
        <SlidersNavigation
          curSlide={curSlide}
          changeCurSlide={changeCurSlide}
        />
        <HorizontalSlider curSlide={curSlide} />
      </HeroWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  max-width: 1440px;
  overflow-anchor: none;

  @media ${device.tablet} {
    max-width: 1024px;
  }
  @media ${device.mobile} {
    max-width: 768px;
  }
`;
const HeroWrapper = styled.div`
  position: relative;
  height: 100%;
  padding: 215px 80px 104px 80px;

  @media ${device.laptop} {
    padding: 160px 60px 60px 60px;
  }
  @media ${device.tablet} {
    padding: 60px 20px 13px 20px;
  }
  @media ${device.mobile} {
    padding: 30px 0 13px 20px;
  }
`;

const BackgroundElements = styled.div`
  &::before {
    position: absolute;
    content: "";
    top: 479px; /*top padding + half of circle - 1px*/
    left: 50%;
    transform: translate(-50%, 50%);
    width: 100%;
    height: 1px;
    background: rgba(66, 86, 122, 0.1);
  }
  &::after {
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1px;
    height: 100%;
    background: rgba(66, 86, 122, 0.1);
  }

  @media ${device.laptop} {
    &::before {
      top: 424px;
    }
  }
  @media ${device.tablet} {
    &::before {
      top: 324px;
    }
  }
  @media ${device.mobile} {
    display: none;
  }
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 3.5rem;
  line-height: 120%;
  max-width: 353px;
  position: absolute;
  top: 170px;
  left: 80px;
  &:before {
    display: block;
    position: absolute;
    content: "";
    left: -78px;
    top: 50%;
    transform: translateY(-50%);
    height: 120px;
    width: 5px;
    background-image: linear-gradient(var(--blue), var(--pink));
  }

  @media ${device.laptop} {
    font-size: 2.5rem;
    max-width: 250px;
    top: 115px;
  }
  &:before {
    height: 96px;
  }
  @media ${device.tablet} {
    left: 50px;
    font-size: 2rem;
    max-width: 200px;
    &:before {
      left: -48px;
      height: 76px;
    }
  }
  @media ${device.mobile} {
    top: 60px;
    left: 20px;
    font-size: 20px;
    max-width: 140px;
  }
`;
