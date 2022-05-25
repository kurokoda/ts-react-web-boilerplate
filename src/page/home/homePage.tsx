import styled from "styled-components";

import { TextButton } from "../../component";

type HomePageProps = {
  firestoreTestData: any;
  onButtonClick: () => void;
};

const Hero = styled.div`
  font-size: 4rem;
`;

const HomePage = ({ firestoreTestData, onButtonClick }: HomePageProps) => {
  return (
    <>
      <Hero>HOME</Hero>
      <div>{firestoreTestData.message}</div>
      <TextButton label="Click Me" onClick={onButtonClick} />
    </>
  );
};

export { HomePage };
