import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import { metrics } from "../themes";

const HamburgerStyle = styled.div`
  position: absolute;
  flex-direction: column;
  justify-content: center;
  height: ${metrics.headerHeight / 3}px;
  width: ${metrics.headerHeight / 3}px;
  div {
    flex-direction: column;
    width: 100%;
  }
  div :nth-child(1),
  div :nth-child(2) {
    margin-bottom: ${metrics.baseUnit - 2}px;
  }
  span {
    width: 100%;
    height: 0;
    border-top: 1px solid ${props => props.theme.mainText};
  }
  &.grow-appear,
  &.grow-enter {
    width: 0px;
    z-index: 1;
  }
  &.grow-appear-active,
  &.grow-enter.grow-enter-active {
    width: ${metrics.headerHeight / 3}px;
    transition: width 400ms ease-out;
    @media (max-width: 480px) {
      width: ${metrics.headerHeight / 2}px;
    }
  }
  &.grow-exit {
    width: ${metrics.headerHeight / 3}px;
    @media (max-width: 480px) {
      width: ${metrics.headerHeight / 2}px;
    }
  }
  &.grow-exit.grow-exit-active {
    width: 0px;
  }
`;

const MenuButton = styled.div`
  height: ${metrics.headerHeight / 3}px;
  width: ${metrics.headerHeight / 3}px;
  z-index: 30;
`;

const Hamburger = props => {
  return (
    <MenuButton onClick={props.onClick}>
      <TransitionGroup appear>
        <CSSTransition key="hamburger" timeout={1000} classNames="grow">
          <HamburgerStyle>
            <div>
              <span />
              <span />
              <span />
            </div>
          </HamburgerStyle>
        </CSSTransition>
      </TransitionGroup>
    </MenuButton>
  );
};

export default Hamburger;
