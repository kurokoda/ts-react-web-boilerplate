import { useState } from "react";
import styled from "styled-components/macro";

import ApplicationLogo from "../../../../asset/logo.svg";
import { APPLICATION_COLOR, APPLICATION_DIMENSION } from "../../../../constant";
import { IconButton } from "../../../button/icon/iconButton";
import { MobileNavigationMenu } from "../../../navigation/menu/auth/mobile/mobileNavigationMenu";

const MobileAuthHeaderContainer = styled.div`
  align-items: center;
  background-color: ${APPLICATION_COLOR.WHITE};
  display: flex;
  filter: drop-shadow(0 4px 4px ${APPLICATION_COLOR.GRAYSCALE_LIGHTEST});
  height: ${APPLICATION_DIMENSION.MOBILE_HEADER_HEIGHT}px;
  justify-content: space-between;
  padding: 0 20px 0 20px;
  position: relative;
  z-index: 100;
`;

const HeaderAuthMobileContainer = styled.div`
  position: absolute;
  background-color: ${APPLICATION_COLOR.WHITE};
  height: calc(100vh - ${APPLICATION_DIMENSION.MOBILE_HEADER_HEIGHT}px);
  width: 100%;
  top: ${APPLICATION_DIMENSION.MOBILE_HEADER_HEIGHT}px;
`;

const Spacer = styled.div`
  width: 42px;
`;

const HeaderAuthMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <MobileAuthHeaderContainer>
        <Spacer />
        <img height="50" alt="Application logo" src={ApplicationLogo} />
        <IconButton icon={isMenuOpen ? "close" : "menu"} onClick={toggleMenu} />
      </MobileAuthHeaderContainer>
      {isMenuOpen ? (
        <HeaderAuthMobileContainer>
          <MobileNavigationMenu />
        </HeaderAuthMobileContainer>
      ) : null}
    </div>
  );
};

export { HeaderAuthMobile };
