import styled from "styled-components/macro";
import { APPLICATION_DIMENSION } from "../../../constant";

const ResponsiveContainer = styled.div<{
  isMobile?: boolean;
  isDesktop?: boolean;
}>`
  @media (max-width: ${APPLICATION_DIMENSION.BREAKPOINT - 1}px) {
    display: ${({ isDesktop }) => (isDesktop ? "none" : "default")};
  }

  @media (min-width: ${APPLICATION_DIMENSION.BREAKPOINT}px) {
    display: ${({ isMobile }) => (isMobile ? "none" : "default")};
  }
`;

export { ResponsiveContainer };
