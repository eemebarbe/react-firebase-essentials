import styled from "styled-components";
import { metrics } from "../themes";

const Text = styled.div`
  margin-bottom: ${metrics.baseUnit * 3}px;
  line-height: 2;
  font-size: 1.5rem;
  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

export default Text;
