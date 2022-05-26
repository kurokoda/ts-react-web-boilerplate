import { Link } from "react-router-dom";
import styled from "styled-components/macro";

import {
  APPLICATION_COLORS_GRAYSCALE_LIGHTEST,
  APPLICATION_DIMENSIONS_DESKTOP_HEADER_WIDTH,
} from "../../../../constant";

const DesktopNavigationMenuContainer = styled.div`
  background-color: ${APPLICATION_COLORS_GRAYSCALE_LIGHTEST};
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: ${APPLICATION_DIMENSIONS_DESKTOP_HEADER_WIDTH};
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
