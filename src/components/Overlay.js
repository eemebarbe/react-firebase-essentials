import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";

const Background = styled.div`
  position: absolute;
  z-index: 10;
  height: 100%;
  width: 100%;
  background-color: transparent;
  &::before {
    content: "";
    position: absolute;
    left: calc(50%);
    top: calc(50%);
    border-radius: 100%;
    width: 0px;
    height: 0px;
    box-shadow: ${props => "0px 0px 0px 2000px black"};
  }
  &.looneyTunes-appear:before,
  &.looneyTunes-enter:before {
    left: calc(50% - 800px);
    top: calc(50% - 800px);
    width: 1600px;
    height: 1600px;
  }
  &.looneyTunes-appear-active:before,
  &.looneyTunes-enter.looneyTunes-enter-active:before {
    left: calc(50%);
    top: calc(50%);
    width: 0px;
    height: 0px;
    transition: all 400ms ease-in;
    -webkit-transition: all 400ms ease-in;
    -moz-transition: all 400ms ease-in;
    -o-transition: all 400ms ease-in;
    transition: all 400ms ease-in;
    transition-property: height, width, left, top;
  }
  &.looneyTunes-exit:before {
    left: calc(50%);
    top: calc(50%);
    width: 0px;
    height: 0px;
  }
  &.looneyTunes-exit.looneyTunes-exit-active:before {
    left: calc(50% - 800px);
    top: calc(50% - 800px);
    width: 1600px;
    height: 1600px;
  }
`;

const Overlay = props => {
  return (
    <TransitionGroup appear>
      <CSSTransition timeout={2000} classNames="looneyTunes">
        <Background>{props.children}</Background>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Overlay;
