import { TextButton } from "../../component";
import { ExampleModal } from "../../component/modal/example/exampleModal";

type HomePageProps = {
  firestoreTestData: any;
  onModalButtonClick: (modalContent: JSX.Element) => void;
};

const HomePage = ({
  firestoreTestData,
  onModalButtonClick,
}: HomePageProps) => {
  return (
    <>
      <div>HOME</div>
      <div className="mb-1">{firestoreTestData.message}</div>
        <TextButton
          label="Open A Modal"
          onClick={() => onModalButtonClick(<ExampleModal />)}
        />
    </>
  );
};

export { HomePage };
