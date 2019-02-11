import styled from "styled-components";
import { metrics } from "../themes";

const Text = styled.div`
  margin-bottom: ${metrics.baseUnit}px;
  font-size: ${props => metrics.baseUnit * props.fontRatio + "px" || "inherit"};
`;

export default Text;
