import { Link } from "react-router-dom";
import styled from "styled-components/macro";

import {
  APPLICATION_COLOR,
  APPLICATION_DIMENSION,
} from "../../../../constant";

const DesktopNavigationMenuContainer = styled.div`
  background-color: ${APPLICATION_COLOR.WHITE};
  border-right: 1px solid  ${APPLICATION_COLOR.GRAYSCALE_LIGHTEST};
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
  padding: 20px;
  width: ${APPLICATION_DIMENSION.DESKTOP_HEADER_WIDTH}px;
`;

const DesktopNavigationMenu = () => {
  return (
    <DesktopNavigationMenuContainer>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </DesktopNavigationMenuContainer>
  );
};

export { DesktopNavigationMenu };
