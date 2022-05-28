import { Link } from "react-router-dom";
import styled from "styled-components/macro";

type NavigationLinkProps = {
    label: string;
    url: string;
}

const NavigationLinkContainer = styled.div`

`

const NavigationLink = ({ label, url }:NavigationLinkProps) => {
  return (
    <NavigationLinkContainer>
      <Link to={url}>{label}</Link>
    </NavigationLinkContainer>
  );
};

export { NavigationLink };
