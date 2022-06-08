import { useContext } from "react";
import { Helmet } from "react-helmet-async";

import { HomePage } from "../../../page/home/homePage";
import { LoadingCard, MessageCard } from "../../../component";
import { ApplicationModalContext, useExample } from "../../../state";

const HomePageMediator = () => {
  const [firestoreTestData, firestoreTestDataStatus] = useExample();

  const { showModal } = useContext(ApplicationModalContext);

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
    <>
     <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <HomePage
      firestoreTestData={firestoreTestData}
      onModalButtonClick={showApplicationModal}
    />
    </>
  );
};

export { HomePageMediator };
