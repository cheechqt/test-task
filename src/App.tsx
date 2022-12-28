import styled from "styled-components";
import { Hero } from "pages/Hero";

export function App() {
  return (
    <AppWrapper>
      <Hero />
      <Hero />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: var(--darkwhite);
  font-weight: 400;
  color: var(--darkblue);
  overflow-anchor: none;
`;
