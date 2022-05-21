import Button from "react-bootstrap/Button";

type TextButtonProps = {
  onClick: () => any;
  text: string;
};

const TextButton = ({ onClick, text }: TextButtonProps) => {
  return <Button onClick={onClick}>{text}</Button>;
};

export { TextButton };
