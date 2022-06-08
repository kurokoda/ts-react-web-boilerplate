import styled from "styled-components/macro";
import { APPLICATION_COLOR } from "../../constant";

import { IconButton } from "../button/icon/iconButton";

export const StyledInputLabel = styled.label`
    font-weight: bold;
    margin: 0;
`;

export const StyledInputSubLabel = styled.div<{ horizontal: boolean }>`
    color: ${APPLICATION_COLOR.GRAYSCALE_DARKEST};
    font-size: 12px;
    padding-top: 1px;
    margin: ${({ horizontal }) => (horizontal ? "0 0 0 0.50rem" : "0 0  0.25rem 0")};
`;

type InputLabelGroupProps = {
    label: string;
    formDataKey: string;
    horizontal?: boolean;
    sublabel?: string;
    tooltipText?: string;
};

export const InputLabelGroup = ({
    label,
    formDataKey,
    horizontal = false,
    sublabel,
    tooltipText,
}: InputLabelGroupProps) => {
    return (
        <div className={horizontal ? "d-flex" : ""}>
            <div className="align-items-center d-flex">
                <StyledInputLabel htmlFor={formDataKey}>{label}</StyledInputLabel>
                {sublabel && horizontal ? (
                    <StyledInputSubLabel horizontal={true}>{sublabel}</StyledInputSubLabel>
                ) : null}
                {tooltipText ? <IconButton className="p-0 pl-2" icon="help" tooltipText={tooltipText} /> : null}
            </div>
            {sublabel && !horizontal ? <StyledInputSubLabel horizontal={false}>{sublabel}</StyledInputSubLabel> : null}
        </div>
    );
};
