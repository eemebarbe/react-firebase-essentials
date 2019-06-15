import React from "react";
import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { metrics } from "../themes";

const CloseStyle = styled.div`
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
    @media (max-width: 480px) {
      height: ${metrics.baseUnit * 2 - 2}px;
    }
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
    @media (max-width: 480px) {
      height: ${metrics.baseUnit * 2 - 2}px;
    }
  }
  &.grow-exit:before,
  &.grow-exit:after {
    height: ${metrics.baseUnit * 3 - 2}px;
    @media (max-width: 480px) {
      height: ${metrics.baseUnit * 2 - 2}px;
    }
  }
  &.grow-exit.grow-exit-active:before,
  &.grow-exit.grow-exit-active:after {
    height: 0px;
  }
`;

const MenuButton = styled.div`
  height: ${metrics.headerHeight / 3}px;
  width: ${metrics.headerHeight / 3}px;
  z-index: 30;
`;

const Close = props => {
  return (
    <MenuButton onClick={props.onClick}>
      <TransitionGroup appear>
        <CSSTransition key="close" timeout={1000} classNames="grow">
          <CloseStyle />
        </CSSTransition>
      </TransitionGroup>
    </MenuButton>
  );
};

export default Close;
