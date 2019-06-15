import styled from "styled-components";
import { metrics } from "../themes";

const Close = styled.div`
  position: absolute;
  flex-direction: column;
  justify-content: center;
  height: ${metrics.headerHeight / 3}px;
  width: ${metrics.headerHeight / 3}px;
  &:before,
  &:after {
    position: absolute;
    margin-left: ${metrics.baseUnit}px;
    content: " ";
    height: ${metrics.baseUnit * 3 - 2}px;
    width: 1px;
    background-color: ${props => props.theme.mainText};
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
  &.grow-appear:before,
  &.grow-enter:before,
  &.grow-appear:after,
  &.grow-enter:after {
    height: 0px;
    z-index: 1;
  }
  &.grow-appear-active:before,
  &.grow-enter.grow-enter-active:before,
  &.grow-appear-active:after,
  &.grow-enter.grow-enter-active:after {
    height: ${metrics.baseUnit * 3 - 2}px;
    transition: height 400ms ease-out;
  }
  &.grow-exit:before,
  &.grow-exit:after {
    height: ${metrics.baseUnit * 3 - 2}px;
  }
  &.grow-exit.grow-exit-active:before,
  &.grow-exit.grow-exit-active:after {
    height: 0px;
  }
`;

export default Close;
