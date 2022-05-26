import { useState } from "react";
import { Modal } from "react-bootstrap";
import styled from "styled-components/macro";

import { ApplicationRouter } from "../../../router";
import { ApplicationModalContext } from "../../../state/local/context/applicationModal/applicationModalContext";
import { ResponsiveContainer } from "../../container/responsive/responsiveContainer";
import { SidebarNavigationMenu } from "../../navigation/menu/sidebar/sidebarNavigationMenu";
import { TopNavigationMenu } from "../../navigation/menu/top/topNavigationMenu";

const DesktopContainer = styled.div`
  display: flex;
`;

const ApplicationContainer = () => {
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
    <>
      <Modal show={Boolean(modalContent)} onHide={hideModal}>
        {modalContent}
      </Modal>

      <ApplicationModalContext.Provider value={{ showModal, hideModal }}>
        <ResponsiveContainer isMobile>
          <TopNavigationMenu />
          {application}
        </ResponsiveContainer>

        <ResponsiveContainer isDesktop>
          <DesktopContainer>
            <SidebarNavigationMenu />
            <div>{application}</div>
          </DesktopContainer>
        </ResponsiveContainer>
      </ApplicationModalContext.Provider>
    </>
  );
};

export { ApplicationContainer, ApplicationModalContext };
