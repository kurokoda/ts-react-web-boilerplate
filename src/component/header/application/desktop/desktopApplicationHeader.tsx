import styled from "styled-components/macro";

import ApplicationLogo from "../../../../asset/logo.svg";
import {
  APPLICATION_COLOR,
  APPLICATION_DIMENSION,
} from "../../../../constant";

const DesktopApplicationHeaderContainer = styled.div`
  align-items: center;
  display: flex;
  background-color: ${APPLICATION_COLOR.WHITE};
  height: ${APPLICATION_DIMENSION.MOBILE_HEADER_HEIGHT}px;
  filter: drop-shadow(0 4px 4px ${APPLICATION_COLOR.GRAYSCALE_LIGHTEST});
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
