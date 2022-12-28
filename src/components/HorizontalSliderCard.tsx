import { FC } from "react";
import styled from "styled-components";
import { device } from "utils/devicesBreakpoints";

interface CardProps {
  title: string;
  content: string;
}

export const HorizontalSliderCard: FC<CardProps> = ({ title, content }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* max-width: 400px; */
`;

const Title = styled.h5`
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 120%;
  text-transform: uppercase;
  text-align: left;
  color: var(--blue);

  @media ${device.mobile} {
    font-size: 16px;
  }
`;

const Content = styled.p`
  margin-top: 15px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: var(--darkblue);

  @media ${device.laptop} {
    margin-top: 15px;
    font-size: 16px;
    line-height: 24px;
  }
  @media ${device.mobile} {
    font-size: 14px;
    line-height: 20px;
  }
`;
