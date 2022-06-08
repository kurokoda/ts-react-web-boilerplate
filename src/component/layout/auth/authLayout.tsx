import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Navigate, Outlet } from "react-router-dom";
import styled from "styled-components/macro";

import { DesktopAuthHeader } from "../../header/auth/desktop/desktopAuthHeader";
import { HeaderAuthMobile } from "../../header/auth/mobile/mobileAuthHeader";
import { NavigationMenuDesktop } from "../../navigation/menu/auth/desktop/navigationMenuDesktop";
import { ApplicationModalContext } from "../../../state";
import { APPLICATION_DIMENSION } from "../../../constant";
import { useWindowBreakpoint } from "../../../state";
import { useSelector } from "react-redux";
import { ApplicationState } from "../../../type";

const AuthLayoutContainer = styled.div`
  min-width: ${APPLICATION_DIMENSION.MINIMUM_WIDTH}px;
`;

const AuthLayout = () => {
  const [modalContent, setModalContent] = useState<JSX.Element | undefined>();

  const user = useSelector((state: ApplicationState) => state.user);

  const showModal = (modalContent: JSX.Element) => {
    setModalContent(modalContent);
    return null;
  };

  const { isMobile } = useWindowBreakpoint();

  const hideModal = () => {
    setModalContent(undefined);
    return null;
  };

  if (!user) {
    return <Navigate to="/signIn" replace />;
  }

  return (
    <AuthLayoutContainer>
      <Modal show={Boolean(modalContent)} onHide={hideModal}>
        {modalContent}
      </Modal>

      <ApplicationModalContext.Provider value={{ showModal, hideModal }}>
        {isMobile ? (
          <>
            <HeaderAuthMobile />
            <div className="m-3 w-100">
              <Outlet />
            </div>
          </>
        ) : (
          <>
            <DesktopAuthHeader />
            <div className="d-flex">
              <NavigationMenuDesktop />
              <div className="m-3 w-100">
                <Outlet />
              </div>
            </div>
          </>
        )}
      </ApplicationModalContext.Provider>
    </AuthLayoutContainer>
  );
};

export { AuthLayout };
