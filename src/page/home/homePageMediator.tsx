import { useDispatch } from "react-redux";

import { HomePage } from "./homePage";
import { increment } from "../../state/local/slice/example/example";

const HomePageMediator = () => {
  const dispatch = useDispatch();

  const onButtonClick = () => {
    dispatch(increment());
  };

  return <HomePage onButtonClick={onButtonClick} />;
};

export { HomePageMediator };
