import { FC } from "react";
import styled, { css } from "styled-components";
import { SliderButton } from "components/UI/SliderButton";
import { device } from "utils/devicesBreakpoints";
import { INavButton } from "types";

export const NavigationButton: FC<INavButton> = (props) => {
  return <StyledNavigationButton {...props} />;
};

const StyledNavigationButton = styled(SliderButton)<INavButton>`
  position: static;
  transform: translateY(0);
  width: 50px;
  height: 50px;
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
      &:hover {
        background-color: transparent;
      }
    `}
  @media ${device.tablet} {
    position: static;
    width: 35px;
    height: 35px;
    svg {
      transform: scale(75%);
    }
  }
  @media ${device.mobile} {
    display: block;
  }
`;
