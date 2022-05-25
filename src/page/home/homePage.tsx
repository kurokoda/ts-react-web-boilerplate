import styled from "styled-components";

import { TextButton } from "../../component";

type HomePageProps = {
  onButtonClick: () => void;
};

const Hero = styled.div`
  font-size: 4rem;
`;

const HomePage = ({ onButtonClick }: HomePageProps) => {
  return (
    <>
      <Hero>HOME</Hero>
      <TextButton label="Click Me" onClick={onButtonClick} />
    </>
  );
};

export { HomePage };
