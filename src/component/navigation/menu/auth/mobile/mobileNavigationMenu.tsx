import { Link } from "react-router-dom";
import styled from "styled-components/macro";

import { APPLICATION_DIMENSION } from "../../../../../constant";

const MobileNavigationMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: ${APPLICATION_DIMENSION.MOBILE_HEADER_HEIGHT};
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
