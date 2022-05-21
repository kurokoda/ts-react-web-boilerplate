import Button from "react-bootstrap/Button";

type TextButtonProps = {
  label: string;
  onClick: () => any;

  disabled?: boolean;
};

const TextButton = ({ disabled, onClick, label }: TextButtonProps) => {
  return (
    <Button disabled={disabled} onClick={onClick}>
      {label}
    </Button>
  );
};

export { TextButton };
