import { FC } from "react";
import styled, { css } from "styled-components";
import { ISliderButton } from "types";
import { device } from "utils/devicesBreakpoints";

const PrimaryNextArrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="14"
    viewBox="0 0 10 14"
    fill="none"
  >
    <path d="M1.50012 0.750001L7.75012 7L1.50012 13.25" strokeWidth="2" />
  </svg>
);
const PrimaryPrevArrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="14"
    viewBox="0 0 10 14"
    fill="none"
  >
    <path d="M8.49988 0.750001L2.24988 7L8.49988 13.25" strokeWidth="2" />
  </svg>
);
const SecondaryNextArrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="8"
    height="12"
    viewBox="0 0 8 12"
    fill="none"
  >
    <path d="M1 1L6 6L1 11" strokeWidth="2" />
  </svg>
);

const SecondaryPrevArrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="8"
    height="12"
    viewBox="0 0 8 12"
    fill="none"
  >
    <path d="M7 11L2 6L7 1" strokeWidth="2" />
  </svg>
);

export const SliderButton: FC<ISliderButton> = (props) => {
  return (
    <StyledSliderButton {...props}>
      {props.secondary &&
        (props.next ? SecondaryNextArrow : SecondaryPrevArrow)}
      {props.primary && (props.next ? PrimaryNextArrow : PrimaryPrevArrow)}
    </StyledSliderButton>
  );
};

const StyledSliderButton = styled.button<ISliderButton>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  transition: all 0.5s;
  ${(props) =>
    props.next &&
    css`
      right: -40px;

      @media ${device.tablet} {
        right: -14px;
      }
    `}
  ${(props) =>
    props.prev &&
    css`
      left: -40px;
      @media ${device.tablet} {
        left: -14px;
      }
    `}
  ${(props) =>
    props.secondary &&
    css`
      background-color: var(--white);
      box-shadow: 0px 0px 15px rgba(56, 119, 238, 0.1);
      svg {
        path {
          stroke: var(--blue);
        }
      }
    `}
  ${(props) =>
    props.primary &&
    css`
      background-color: transparent;
      border: 1px solid rgba(66, 86, 122, 0.5);
      &:hover {
        background-color: var(--white);
      }
      svg {
        path {
          stroke: var(--darkblue);
        }
      }
    `}

@media ${device.mobile} {
    display: none;
  }
`;
