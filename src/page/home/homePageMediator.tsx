import { useDispatch } from "react-redux";

import { HomePage } from "./homePage";
import { increment } from "../../state/local/slice/example/example";
import { useExample } from "../../state";
import { LoadingCard } from "../../component/cards/loading/loadingCard";
import { MessageCard } from "../../component/cards/message/messageCard";

const HomePageMediator = () => {
  const dispatch = useDispatch();

  const [firestoreTestData, firestoreTestDataStatus] = useExample();

  const onButtonClick = () => {
    dispatch(increment());
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
      onButtonClick={onButtonClick}
    />
  );
};

export { HomePageMediator };
