import { FC, useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { RoundedSliderItem } from "components/RoundedSliderItem";
import { getRotateDegree } from "utils/getRotateDegree";
import { getCoords } from "utils/getCoords";
import { IHeroComponent } from "types";
import { device } from "utils/devicesBreakpoints";
import data from "data.json";

// should be in data.json
const titlesData = [
  "Литература",
  "Кино",
  "Наука",
  "Литература2",
  "Кино2",
  "Наука2"
];

export const RoundedSlider: FC<IHeroComponent> = ({
  curSlide,
  changeCurSlide
}) => {
  const [curDegree, setCurDegree] = useState<number>(0);
  const prevSlide = useRef(curSlide);
  const totalItems = data.length;
  const coords = getCoords(totalItems, 265, 532);

  useEffect(() => {
    const degree = getRotateDegree(prevSlide.current, curSlide, totalItems);
    setCurDegree(curDegree + degree);
    prevSlide.current = curSlide;
  }, [curSlide]);

  const handleCircleClick = (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const targetIndex = +target.innerText;
    if (targetIndex < totalItems + 1) {
      changeCurSlide(targetIndex);
    }
  };

  return (
    <>
      <Wrapper>
        <CircleWrapper>
          <Title key={"JustForAnimation" + Math.random()}>
            {titlesData.find((item, index) => index === curSlide - 1)}
          </Title>
          <Circle
            onClick={(e) => handleCircleClick(e)}
            style={{ transform: `rotate(${curDegree}deg)` }}
          >
            {coords &&
              data.map((item, index) => {
                return (
                  <RoundedSliderItem
                    itemDegree={-curDegree}
                    key={index}
                    coords={coords[index]}
                    active={curSlide === index + 1}
                  >
                    {index + 1}
                  </RoundedSliderItem>
                );
              })}
          </Circle>
        </CircleWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
    transform: scale(70%);
  }
  @media ${device.mobile} {
    display: none;
  }
`;

const CircleWrapper = styled.div`
  position: relative;
`;

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

const Title = styled.p`
  animation: 1.8s ${fadeIn} ease-in;
  position: absolute;
  left: 440px;
  top: 20px;
  text-align: left;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
`;

const Circle = styled.div`
  position: relative;
  display: flex;
  width: 530px; /*circle width*/
  height: 530px;
  border-radius: 50%;
  border: 1px solid rgba(66, 86, 122, 0.2);
  border-opacity: 0.2;
  align-items: center;
  justify-content: center;
  transition: all 1.5s;
`;
