import styled from "styled-components";
import { colors } from "../themes";

const CenteredDiv = styled.div`
  display: flex;
  background-color: ${colors.inactive};
  justify-content: ${props => (props.horizontal ? "center" : "flex-start")};
  align-items: ${props => (props.vertical ? "center" : "flex-start")};
  height: 100%;
  background-color: ${colors.detailText};
`;

export default CenteredDiv;
