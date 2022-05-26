import { useDispatch } from "react-redux";

import { HomePage } from "./homePage";
import { increment } from "../../state/local/slice/example/example";
import { useExample } from "../../state";
import { LoadingCard } from "../../component/card/loading/loadingCard";
import { MessageCard } from "../../component/card/message/messageCard";
import { useContext } from "react";
import { ApplicationModalContext } from "../../component/layout/application/applicationContainer";

const HomePageMediator = () => {
  const dispatch = useDispatch();

  const [firestoreTestData, firestoreTestDataStatus] = useExample();

  const { showModal } = useContext(ApplicationModalContext)

  const incrementReduxState = () => {
    dispatch(increment());
  };

  const showApplicationModal = (modalContent:JSX.Element) => {
    showModal(modalContent)
  };

  if (firestoreTestDataStatus === "loading") {
    return <LoadingCard/>;
  }

  if (
    firestoreTestDataStatus === "error" ||
    (firestoreTestDataStatus === "success" && !firestoreTestData)
  ) {
    console.log("Ian : error");
    return <MessageCard icon="error" text="Please refresh the app to try again" title="Oops!"/>
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
