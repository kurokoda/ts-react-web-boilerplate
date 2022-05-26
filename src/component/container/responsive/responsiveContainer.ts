import styled from "styled-components/macro";

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

export { ResponsiveContainer };
