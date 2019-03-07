import styled from "styled-components";
import { colors } from "../themes";

const CenteredDiv = styled.div`
  display: flex;
  justify-content: ${props => (props.horizontal ? "center" : "flex-start")};
  align-items: ${props => (props.vertical ? "center" : "flex-start")};
  height: 100%;
`;

export default CenteredDiv;
