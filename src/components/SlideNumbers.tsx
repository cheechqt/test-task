import { FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { device } from "utils/devicesBreakpoints";
import data from "data.json";

export const SlideNumbers: FC<{ curSlide: number }> = ({ curSlide }) => {
  const [numbers, setNumbers] = useState<number[]>([]);
  const prevNumbers = useRef<number[] | null>(null);

  const changeNumbersByOne = (nums: number[], target: number[]): void => {
    const diff = Math.abs(nums[0] - target[0]);
    const shouldIncrease = nums[0] < target[0]; // true - increase, false - decrease
    const delayValue = 1500 / diff; // 1500ms animation duration

    let delay = 0;
    for (let i = 1; i <= diff; ++i) {
      if (shouldIncrease) {
        setTimeout(() => setNumbers([nums[0] + i, nums[1] + i]), delay);
      } else {
        setTimeout(() => setNumbers([nums[0] - i, nums[1] - i]), delay);
      }
      delay += delayValue;
    }
  };

  useEffect(() => {
    const curSlideData = data[curSlide - 1];
    const firstNum = +curSlideData[0]?.title;
    const secondNum = +curSlideData.at(-1)?.title!;
    const newNums = [firstNum, secondNum];

    if (prevNumbers.current) {
      changeNumbersByOne(numbers, newNums);
      prevNumbers.current = numbers;
    } else {
      setNumbers(newNums);
      prevNumbers.current = newNums;
    }
  }, [curSlide]);

  return (
    <Wrapper>
      <FirstNum>{numbers[0]}</FirstNum>
      <SecondNum>{numbers[1]}</SecondNum>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 320px; /*top padding + half of circle - 1px*/
  left: 50%;
  transform: translate(-50%, 50%);
  white-space: nowrap;
  text-align: center;
  letter-spacing: -0.02rem;
  display: flex;
  gap: 70px;

  @media ${device.laptop} {
    top: 230px;
    gap: 165px;
  }
  @media ${device.tablet} {
    top: 200px;
    gap: 140px;
  }
  @media ${device.mobile} {
    top: 103px;
    gap: 13px;
  }
`;

const FirstNum = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 200px;
  line-height: 160px;
  color: var(--blue);
  padding-right: 6px;

  @media ${device.laptop} {
    font-size: 160px;
    line-height: 120%;
    padding-right: 2px;
  }
  @media ${device.tablet} {
    font-size: 100px;
    padding-right: 4px;
  }
  @media ${device.mobile} {
    font-size: 56px;
    line-height: 73px;
  }
`;

const SecondNum = styled(FirstNum)`
  color: var(--pink);
`;
