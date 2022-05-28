import styled from "styled-components";
import { IconType, iconTypes } from "../../icon/icon";
import { IconButton } from "./iconButton";

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  max-width: 300px;
`;

const $IconButton = () => {
  return (
    <>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          height: "calc(100vh)",
          justifyContent: "center",
        }}
      >
        <GridContainer>
          {iconTypes.map((iconType: IconType, index: number) => {
            const key = `icon-with-tool-tip-button-${index}`;
            return (
              <IconButton
                icon={iconType}
                key={key}
                onClick={() => null}
                tooltipText={`${iconType} button`}
              />
            );
          })}
        </GridContainer>
      </div>
    </>
  );
};

export default {
  title: "components/buttons/iconButton",
  component: $IconButton,
};

export { $IconButton };
