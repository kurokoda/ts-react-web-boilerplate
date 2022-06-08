import { useContext } from "react";
import { useDispatch } from "react-redux";

import { HomePage } from "../../../page/home/homePage";
import { LoadingCard, MessageCard } from "../../../component";
import { ApplicationModalContext, increment, useExample } from "../../../state";

const HomePageMediator = () => {
  const dispatch = useDispatch();

  const [firestoreTestData, firestoreTestDataStatus] = useExample();

  const { showModal } = useContext(ApplicationModalContext);

  const incrementReduxState = () => {
    dispatch(increment());
  };

  const showApplicationModal = (modalContent: JSX.Element) => {
    showModal(modalContent);
  };

  if (firestoreTestDataStatus === "loading") {
    return <LoadingCard />;
  }

  if (
    firestoreTestDataStatus === "error" ||
    (firestoreTestDataStatus === "success" && !firestoreTestData)
  ) {
    return (
      <MessageCard
        icon="error"
        text="Please refresh the app to try again"
        title="Oops!"
      />
    );
  }

  return (
    <HomePage
      firestoreTestData={firestoreTestData}
      onModalButtonClick={showApplicationModal}
      onReduxButtonClick={incrementReduxState}
    />
  );
};

export { HomePageMediator };
