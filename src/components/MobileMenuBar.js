import React from "react";
import styled from "styled-components";
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
  @media (max-width: 480px) {
    display: flex;
  }
  div {
    padding: 0px ${metrics.bodyPadding}px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    div {
      padding: 0;
      height: ${metrics.mobileMenuHeight - 1}px;
      align-items: center;
      justify-content: space-between;
      div {
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

const MobileMenuBar = props => {
  const pushTo = path => {
    props.location.pathname !== path && props.history.push(path);
  };

  return (
    <Container>
      <div>
        <div>
          <div onClick={() => pushTo("/dashboard")}>DASHBOARD</div>
          <div onClick={() => pushTo("/profile")}>PROFILE</div>
        </div>
      </div>
    </Container>
  );
};

export default withRouter(MobileMenuBar);
