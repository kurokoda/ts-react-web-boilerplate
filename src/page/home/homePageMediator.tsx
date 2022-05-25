import { useDispatch } from "react-redux";

import { HomePage } from "./homePage";
import { increment } from "../../state/local/slice/example/example";
import { useExample } from "../../state";

const HomePageMediator = () => {
  const dispatch = useDispatch();

  const [exampleData, exampleDataStatus] = useExample();

  const onButtonClick = () => {
    dispatch(increment());
  };

  if (exampleDataStatus === "error") return <div>Error</div>;

  if (exampleDataStatus === "loading") return <div>Loading</div>;

  return <HomePage exampleData={exampleData} onButtonClick={onButtonClick} />;
};

export { HomePageMediator };
