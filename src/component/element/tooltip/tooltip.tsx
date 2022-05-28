import { ReactNode, PropsWithChildren, useRef, useState, ReactElement } from "react";
import { Overlay, Tooltip as ReactBootstrapTooltip } from "react-bootstrap";
import Placement  from "react-bootstrap/Overlay";
import styled from "styled-components/macro";

const TooltipContainer = styled.div`
    cursor: pointer;
`;

interface TooltipProps {
    tooltipText: ReactNode;
    name?: string;
    placement?: any | undefined;
}

export const Tooltip = ({
    children,
    name = "universal-tooltip",
    placement = "top",
    tooltipText,
}: PropsWithChildren<TooltipProps>): ReactElement => {
    const tooltipContainerRef = useRef<any>();
    const [doShow, setDoShowTooltip] = useState(false);

    if (!tooltipText) {
        return <>{children}</>;
    }

    return (
        <>
            <TooltipContainer
                ref={tooltipContainerRef}
                onMouseOver={() => setDoShowTooltip(true)}
                onMouseOut={() => setDoShowTooltip(false)}
                onMouseDown={() => setDoShowTooltip(false)}
            >
                {children}
            </TooltipContainer>
            <Overlay target={tooltipContainerRef.current} show={doShow} placement={placement}>
                {/* ToDo IanG any */}
                {(props: any) => (
                    <ReactBootstrapTooltip id={name} {...props}>
                        {tooltipText}
                    </ReactBootstrapTooltip>
                )}
            </Overlay>
        </>
    );
};
