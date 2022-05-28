import { useState } from "react";
import { Modal } from "react-bootstrap";
import styled from "styled-components/macro";

import { ResponsiveContainer } from "../../container/responsive/responsiveContainer";
import { DesktopApplicationHeader } from "../../header/application/desktop/desktopApplicationHeader";
import { MobileApplicationHeader } from "../../header/application/mobile/mobileApplicationHeader";
import { DesktopNavigationMenu } from "../../navigation/menu/desktop/desktopNavigationMenu";
import { MobileNavigationMenu } from "../../navigation/menu/mobile/mobileNavigationMenu";

import { ApplicationRouter } from "../../../router";
import { ApplicationModalContext } from "../../../state";
import { APPLICATION_DIMENSIONS } from "../../../constant";

const ApplicationLayoutContainer = styled.div`
  min-width: ${APPLICATION_DIMENSIONS.MINIMUM_WIDTH}px;
`;

const ApplicationLayout = () => {
  const [modalContent, setModalContent] = useState<JSX.Element | undefined>();

  const application = <ApplicationRouter />;

  const showModal = (modalContent: JSX.Element) => {
    setModalContent(modalContent);
    return null;
  };

  const hideModal = () => {
    setModalContent(undefined);
    return null;
  };

  return (
    <ApplicationLayoutContainer>
      <Modal show={Boolean(modalContent)} onHide={hideModal}>
        {modalContent}
      </Modal>

      <ApplicationModalContext.Provider value={{ showModal, hideModal }}>
        <ResponsiveContainer isMobile>
          <MobileApplicationHeader />
          <MobileNavigationMenu />
          {application}
        </ResponsiveContainer>

        <ResponsiveContainer isDesktop>
          <DesktopApplicationHeader />
          <div className="d-flex">
            <DesktopNavigationMenu />
            <div className="m-3 w-100">{application}</div>
          </div>
        </ResponsiveContainer>
      </ApplicationModalContext.Provider>
    </ApplicationLayoutContainer>
  );
};

export { ApplicationLayout };
