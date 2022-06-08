import { ErrorText } from "../../text/error";
import { NumberInput } from "./input";
import { InputLabelGroup } from "../../text/inputLabel";
import styled from "styled-components";

type NumberInputGroupProps = {
    formDataKey: string;
    label: string;
    onChange: (formDataKey: any, value: number) => void;
    value: number | undefined;

    allowNegativeNumbers?: boolean;
    step?: string;
    error?: string;
    fullWidth?: boolean;
    placeholder?: string;
    sublabel?: string;
    tooltipText?: string;
};

const NumberInputGroupContainer = styled.div<{ fullWidth: boolean }>`
    width: ${({ fullWidth }) => (fullWidth ? "100%" : "200px")};
`;

const NumberInputGroup = ({
    allowNegativeNumbers = false,
    error,
    formDataKey,
    fullWidth = false,
    label,
    onChange,
    placeholder,
    sublabel,
    step = "1",
    tooltipText,
    value,
}: NumberInputGroupProps) => {
    return (
        <div className="mb-3">
            <InputLabelGroup formDataKey={formDataKey} label={label} sublabel={sublabel} tooltipText={tooltipText} />
            <NumberInputGroupContainer fullWidth={fullWidth}>
                <NumberInput
                    allowNegativeNumbers={allowNegativeNumbers}
                    id={formDataKey}
                    onChange={(value: number) => {
                        onChange(formDataKey, value);
                    }}
                    placeholder={placeholder}
                    step={step}
                    value={value}
                />
            </NumberInputGroupContainer>
            {error ? <ErrorText>{error}</ErrorText> : null}
        </div>
    );
};

export { NumberInputGroup };
