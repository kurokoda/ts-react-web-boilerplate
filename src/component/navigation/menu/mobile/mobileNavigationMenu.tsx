import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import {
  APPLICATION_DIMENSIONS_MOBILE_HEADER_HEIGHT,
  APPLICATION_COLORS_GRAYSCALE_LIGHTEST,
} from "../../../../constant";

const MobileNavigationMenuContainer = styled.div`
  background-color: ${APPLICATION_COLORS_GRAYSCALE_LIGHTEST};
  height: ${APPLICATION_DIMENSIONS_MOBILE_HEADER_HEIGHT};
`;

const MobileNavigationMenu = () => {
  return (
    <MobileNavigationMenuContainer>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </MobileNavigationMenuContainer>
  );
};

export { MobileNavigationMenu };
