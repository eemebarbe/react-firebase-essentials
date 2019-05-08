import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { metrics } from "../themes";
import styled from "styled-components";

const Background = styled.div`
  pointer-events: none;
  position: absolute;
  z-index: 10;
  height: 100%;
  width: 100%;
  background-color: transparent;
  &::before {
    content: "";
    position: absolute;
    left: calc(50% - 800px);
    top: calc(50% - 800px);
    border-radius: 100%;
    width: 1600px;
    height: 1600px;
    box-shadow: 0px 0px 0px 2000px ${props => props.theme.overlayBackground};
  }
  &.looneyTunes-enter:before {
    left: calc(50% - 800px);
    top: calc(50% - 800px);
    width: 1600px;
    height: 1600px;
  }
  &.looneyTunes-enter-active:before {
    left: calc(50%);
    top: calc(50%);
    width: 0px;
    height: 0px;
    transition: all ${metrics.animationLength}ms ease-in;
    transition-property: height, width, left, top;
  }
  &.looneyTunes-enter-done:before {
    left: calc(50%);
    top: calc(50%);
    width: 0px;
    height: 0px;
  }
  &.looneyTunes-exit:before {
    left: calc(50%);
    top: calc(50%);
    width: 0px;
    height: 0px;
  }
  &.looneyTunes-exit-active:before {
    left: calc(50% - 800px);
    top: calc(50% - 800px);
    width: 1600px;
    height: 1600px;
    transition: all ${metrics.animationLength}ms ease-in;
    transition-property: height, width, left, top;
  }
`;

const Overlay = props => {
  const [showChildren, setShowChildren] = useState(false);

  return (
    <CSSTransition
      timeout={{
        enter: metrics.animationLength,
        exit: metrics.animationLength
      }}
      in={props.visible}
      enter
      exit
      classNames="looneyTunes"
      onEntered={() => setShowChildren(true)}
      onExiting={() => setShowChildren(false)}>
      <Background>{showChildren && props.children}</Background>
    </CSSTransition>
  );
};

export default Overlay;
