import styled from "styled-components/macro";

import ApplicationLogo from "../../../../asset/logo.svg";
import {
  APPLICATION_COLORS,
  APPLICATION_DIMENSIONS,
} from "../../../../constant";

const DesktopApplicationHeaderContainer = styled.div`
  align-items: center;
  display: flex;
  background-color: ${APPLICATION_COLORS.WHITE};
  height: ${APPLICATION_DIMENSIONS.MOBILE_HEADER_HEIGHT}px;
  filter: drop-shadow(0 4px 4px #ddd);
`;

const DesktopApplicationHeader = () => {
  return (
    <DesktopApplicationHeaderContainer>
      <div>
        <img height="50" alt="Application logo" src={ApplicationLogo} />
        Application
      </div>
    </DesktopApplicationHeaderContainer>
  );
};

export { DesktopApplicationHeader };
