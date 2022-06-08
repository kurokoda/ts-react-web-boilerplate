import { TextButton } from "../../component";
import { GapContainer } from "../../component/container/gap/gapContainer";
import { ExampleModal } from "../../component/modal/example/exampleModal";

type HomePageProps = {
  firestoreTestData: any;
  onModalButtonClick: (modalContent: JSX.Element) => void;
  onReduxButtonClick: () => void;
};

const HomePage = ({
  firestoreTestData,
  onModalButtonClick,
  onReduxButtonClick,
}: HomePageProps) => {
  return (
    <>
      <div>HOME</div>
      <div className="mb-1">{firestoreTestData.message}</div>
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
