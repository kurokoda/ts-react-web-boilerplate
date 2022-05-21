type HomePageProps = {
  onButtonClick: () => void;
};

const HomePage = ({ onButtonClick }: HomePageProps) => {
  return (
    <>
      <div>HOME</div>
      <button onClick={onButtonClick}>click me</button>
    </>
  );
};

export { HomePage };
