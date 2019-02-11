import styled from "styled-components";

const Icon = styled.img`
  color: white;
  height: 20px;
  width: 20px;
  src: url(${props => props.src});
`;

export default Icon;
