import { Icon, IconType } from "../../icon/icon";
import styled from "styled-components";
import { ReactNode } from "react";

interface MessageCardProps {
  icon: IconType;
  text: string;
  title: string;

  height?: string;
  render?: () => ReactNode;
}

const NoItemsContainer = styled.div<{ height: string }>`
  align-items: center;
  background-color: #fafafa;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  height: ${({ height }) => (height ? height : "auto")};
  width: 100%;
`;

const NoItemsContent = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  height: 240px;
`;

const NoItemsIconContainer = styled.div`
  align-items: center;
  background-color: #ffffff;
  border-radius: 100%;
  box-shadow: 0px 2px 3px rgba(201, 209, 215, 0.24);
  display: flex;
  max-height: 80px;
  min-height: 80px;
  height: 80px;
  justify-content: center;
  width: 80px;
`;

const NoItemsHeader = styled.h5`
  font-weight: 700;
  padding: 20px 0 0 0;
`;

const NoItemsText = styled.p`
  max-width: 480px;
  text-align: center;
`;

const MessageCard = ({
  height = "calc(100vh - 200px)",
  icon,
  render,
  title,
  text,
}: MessageCardProps) => {
  return (
    <NoItemsContainer height={height}>
      <NoItemsContent>
        <NoItemsIconContainer>
          <Icon type={icon} color="#666666" />
        </NoItemsIconContainer>
        <NoItemsHeader>{title}</NoItemsHeader>
        <NoItemsText>{text}</NoItemsText>
        {render ? render() : null}
      </NoItemsContent>
    </NoItemsContainer>
  );
};

export { MessageCard };
