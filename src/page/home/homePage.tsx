import { TextButton } from "../../component";

type HomePageProps = {
  onButtonClick: () => void;
};

const HomePage = ({ onButtonClick }: HomePageProps) => {
  return (
    <>
      <div>HOME</div>
      <TextButton label="Click Me" onClick={onButtonClick} />
    </>
  );
};

export { HomePage };
