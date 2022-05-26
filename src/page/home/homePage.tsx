import styled from "styled-components";

import { TextButton } from "../../component";
import { GapContainer } from "../../component/container/gap/gapContainer";
import { ExampleModal } from "../../component/modal/example/exampleModal";

type HomePageProps = {
  firestoreTestData: any;
  onModalButtonClick: (modalContent: JSX.Element) => void;
  onReduxButtonClick: () => void;
};

const Hero = styled.div`
  font-size: 4rem;
`;

const HomePage = ({
  firestoreTestData,
  onModalButtonClick,
  onReduxButtonClick,
}: HomePageProps) => {
  return (
    <>
      <Hero>HOME</Hero>
      <div>{firestoreTestData.message}</div>
      <GapContainer>
        <TextButton
          label="Increment Redux State"
          onClick={onReduxButtonClick}
        />
        <TextButton
          label="Open A Modal"
          onClick={() => onModalButtonClick(<ExampleModal />)}
        />
      </GapContainer>
    </>
  );
};

export { HomePage };
