import styled from "styled-components";

import { TextButton } from "../../component";

type HomePageProps = {
  exampleData: any;
  onButtonClick: () => void;
};

const Hero = styled.div`
  font-size: 4rem;
`;

const HomePage = ({ exampleData, onButtonClick }: HomePageProps) => {
  return (
    <>
      <Hero>HOME</Hero>
      <div>{JSON.stringify(exampleData)}</div>
      <TextButton label="Click Me" onClick={onButtonClick} />
    </>
  );
};

export { HomePage };
