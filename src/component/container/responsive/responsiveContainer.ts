import styled from "styled-components/macro";
import { APPLICATION_DIMENSIONS } from "../../../constant";

const ResponsiveContainer = styled.div<{
  isMobile?: boolean;
  isDesktop?: boolean;
}>`
  @media (max-width: ${APPLICATION_DIMENSIONS.BREAKPOINT - 1}px) {
    display: ${({ isDesktop }) => (isDesktop ? "none" : "default")};
  }

  @media (min-width: ${APPLICATION_DIMENSIONS.BREAKPOINT}px) {
    display: ${({ isMobile }) => (isMobile ? "none" : "default")};
  }
`;

export { ResponsiveContainer };
