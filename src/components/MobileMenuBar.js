import React from "react";
import styled from "styled-components";
import { Hamburger } from "../components";
import { withRouter } from "react-router-dom";
import { metrics } from "../themes";

const Container = styled.div`
  display: none;
  z-index: 4;
  width: 100%;
  justify-content: center;
  background-color: ${props => props.theme.background};
  bottom: 0;
  position: absolute;
  border-top: 1px solid ${props => props.theme.inactive};
  height: ${metrics.mobileMenuHeight - 1}px;
  @media (max-width: 480px) {
    display: flex;
  }
`;

const MobileMenuBar = props => {
  return (
    <Container>
      <Hamburger />
    </Container>
  );
};

export default withRouter(MobileMenuBar);
