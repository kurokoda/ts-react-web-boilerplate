import { TextButton } from "../../component";

type HomePageProps = {
  onButtonClick: () => void;
};

const HomePage = ({ onButtonClick }: HomePageProps) => {
  return (
    <>
      <div>HOME</div>
      <TextButton onClick={onButtonClick} text="Click Me" />
    </>
  );
};

export { HomePage };
