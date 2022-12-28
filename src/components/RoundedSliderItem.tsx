import { FC } from "react";
import styled, { css } from "styled-components";
import { IRoundedSliderItem } from "types";

export const RoundedSliderItem: FC<IRoundedSliderItem> = (props) => {
  return (
    <Wrapper {...props}>
      <Content>{props.children}</Content>
    </Wrapper>
  );
};
const Wrapper = styled.button<IRoundedSliderItem>`
  margin: 0;
  padding: 0;
  position: absolute;
  top: ${(props) => props.coords.top + "px"};
  left: ${(props) => props.coords.left + "px"};
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s;
  background-color: var(--darkblue);
  border: 1px solid transparent;
  width: 6px;
  height: 6px;

  p {
    visibility: hidden;
    transform: ${(props) => `rotate(${props.itemDegree}deg)`};
  }

  ${(props) =>
    props.active &&
    css`
      height: 56px;
      width: 56px;
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
      transform: translate(-25px, -25px); /*56 - 6 = 50 / 2 = 25*/
      background-color: var(--darkwhite);
      border: 1px solid var(--darkblue);
      p {
        transition: transform 1.5s;
        transform: rotate(${props.itemDegree}deg);
        visibility: visible;
      }
    `}

  &:hover {
    height: 56px;
    width: 56px;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    transition: all 0.5s;
    transform: translate(-25px, -25px); /*56 - 6 = 50 / 2 = 25*/
    background-color: var(--darkwhite);
    border: 1px solid var(--darkblue);
    p {
      visibility: visible;
    }
  }
`;
const Content = styled.p``;
