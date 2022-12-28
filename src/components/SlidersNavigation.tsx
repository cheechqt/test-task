import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { NavigationButton } from "components/UI/NavigationButton";
import { formatNumber } from "utils/formatNumber";
import { device } from "utils/devicesBreakpoints";
import { IHeroComponent, IPaginationDot } from "types";
import data from "data.json";

export const SlidersNavigation: FC<IHeroComponent> = ({
  curSlide,
  changeCurSlide
}) => {
  const totalItems = data.length;
  const [activeDot, setActiveDot] = useState(totalItems);

  useEffect(() => {
    setActiveDot(curSlide);
  }, [curSlide]);

  const handleChangeActiveDot = (index: number): void => {
    setActiveDot(index + 1);
    changeCurSlide(index + 1);
  };

  return (
    <>
      <Wrapper>
        <Counter>
          {formatNumber(curSlide)}/{formatNumber(totalItems)}
        </Counter>
        <ButtonsWrapper>
          <NavigationButton
            onClick={() => changeCurSlide(--curSlide)}
            prev
            primary
            disabled={curSlide === 1}
          />
          <NavigationButton
            onClick={() => changeCurSlide(++curSlide)}
            next
            primary
            disabled={curSlide === totalItems}
          />
        </ButtonsWrapper>
      </Wrapper>
      <Pagination>
        {Array.from({ length: totalItems }).map((item, index) => (
          <Dot
            onClick={() => handleChangeActiveDot(index)}
            key={index}
            active={activeDot === index + 1}
          />
        ))}
      </Pagination>
    </>
  );
};

const Wrapper = styled.nav`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  margin-top: -40px;

  @media ${device.tablet} {
    padding-left: 55px;
    margin-top: -118px;
  }
  @media ${device.mobile} {
    position: absolute;
    bottom: 14px;
    left: 20px;
    padding-left: 0;
    margin-top: 0;
  }
`;

const Counter = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;

  @media ${device.tablet} {
    gap: 8px;
    margin-top: 8px;
  }
`;

const Pagination = styled.div`
  position: absolute;
  bottom: 32px;
  left: calc(50% - 20px);
  display: flex;
  gap: 10px;

  @media (min-width: 425px) {
    display: none;
  }
`;

const Dot = styled.button<IPaginationDot>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--darkblue);
  opacity: ${(props) => (props.active ? "1" : "0.4")};
`;
