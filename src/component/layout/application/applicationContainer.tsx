import styled from "styled-components/macro";

import { ApplicationRouter } from "../../../router";
import { SidebarNavigationMenu } from "../../navigation/menu/sidebar/sidebarNavigationMenu";
import { TopNavigationMenu } from "../../navigation/menu/top/topNavigationMenu";

const DesktopContainer = styled.div`
  display: flex;
`;

const ResponsiveContainer = styled.div<{
  isMobile?: boolean;
  isDesktop?: boolean;
}>`
  @media (max-width: 995px) {
    display: ${({ isDesktop }) => (isDesktop ? "none" : "default")};
  }

  @media (min-width: 996px) {
    display: ${({ isMobile }) => (isMobile ? "none" : "default")};
  }
`;

const application = <ApplicationRouter />;

const ApplicationContainer = () => {
  return (
    <>
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
    </>
  );
};

export { ApplicationContainer };
