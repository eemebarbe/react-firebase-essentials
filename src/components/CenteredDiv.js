import styled from "styled-components";

const CenteredDiv = styled.div`
  position: relative;
  z-index: 40;
  display: flex;
  flex-direction: column;
  justify-content: ${props => (props.horizontal ? "center" : "flex-start")};
  align-items: ${props => (props.vertical ? "center" : "flex-start")};
  height: 100%;
  text-align: center;
  @media (max-width: 480px) {
    text-align: left;
  }
`;

export default CenteredDiv;
