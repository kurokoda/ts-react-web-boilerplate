import styled from "styled-components/macro";

import { LoadingIndicator } from "../../loadingIndicator/loadingIndicator";

interface LoadingCardProps {
  height?: string;
}

const LoadingCardContainer = styled.div<{ height: string }>`
  align-items: center;
  background-color: #fafafa;
  border-radius: 8px;
  display: flex;
  height: ${({ height }) => (height ? height : "auto")};
  justify-content: center;
  width: 100%;
`;

const LoadingCardContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const LoadingCardIconContainer = styled.div`
  align-items: center;
  background-color: #ffffff;
  border-radius: 100%;
  box-shadow: 0px 2px 3px rgba(201, 209, 215, 0.24);
  display: flex;
  height: 80px;
  justify-content: center;
  width: 80px;
`;

const LoadingCard = ({ height = "calc(100vh - 130px)" }: LoadingCardProps) => {
  return (
    <LoadingCardContainer height={height}>
      <LoadingCardContent>
        <h5
          style={{
            fontWeight: 700,
            padding: "20px 0 0 0",
          }}
        >
          Loading...
        </h5>
        <LoadingCardIconContainer>
          <LoadingIndicator />
        </LoadingCardIconContainer>
      </LoadingCardContent>
    </LoadingCardContainer>
  );
};

export { LoadingCard };
