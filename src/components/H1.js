import React from "react";
import styled from "styled-components";
import { metrics } from "../themes";

const P = styled.h1`
  font-size: 4rem;
  line-height: 1.5;
  margin: 0;
  font-family: "Kollektif-Bold";
  position: relative;
  top: 8px;
  @media (max-width: 480px) {
    font-size: 3.5rem;
  }
`;

const Container = styled.div`
  margin: ${metrics.baseUnit * 3}px 0px;
`;

const H1 = props => {
  return (
    <Container>
      <P>{props.children}</P>
    </Container>
  );
};

export default H1;
