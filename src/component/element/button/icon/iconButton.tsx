import { Button } from "react-bootstrap";

import { Tooltip } from "../../tooltip/tooltip";
import { Icon, IconType } from "../../icon/icon";
import { ButtonVariantType } from "../../../../type";

interface IconButtonProps {
  icon: IconType;

  backgroundColor?: string;
  borderColor?: string;
  className?: string;
  color?: string;
  disabled?: true;
  onClick?: (...values: any[]) => any;
  tooltipText?: string;
  variant?: ButtonVariantType;
}

const IconButton = ({
  backgroundColor,
  borderColor,
  className = "",
  color,
  disabled,
  icon,
  onClick,
  tooltipText,
  variant = "link",
}: IconButtonProps) => {
  const Component = () => (
    <Button
      className={className}
      disabled={disabled}
      onClick={onClick}
      variant={variant}
      size="sm"
      style={{
        backgroundColor: backgroundColor,
        border: borderColor ? `solid 2px ${borderColor}` : "",
      }}
    >
      <Icon type={icon} color={color} />
    </Button>
  );
  return (
    <>
      {tooltipText ? (
        <Tooltip tooltipText={tooltipText}>
          <Component />
        </Tooltip>
      ) : (
        <Component />
      )}
    </>
  );
};

export { IconButton };
