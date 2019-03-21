import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { OverlayContext } from "../contexts/overlayContext";
import { UserContext } from "../contexts/userContext";
import styled from "styled-components";
import { metrics } from "../themes";

const Header = styled.div`
  transform: translateY(${props => "-" + props.scrollTop}px);
  z-index: 8;
  position: absolute;
  background-color: ${props => props.theme.background};
  width: 100%;
  height: ${metrics.headerHeight - 1}px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.inactive};
  @media (max-width: 480px) {
    display: none;
  }
`;

const HeaderInner = styled.div`
  width: ${metrics.bodyWidth}px;
  padding: 0px ${metrics.baseUnit * 2}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: inline-flex;
  }
`;

const CompanyLogo = styled.button`
  color: ${props => props.theme.mainText};
  background-color: transparent;
  pointer-events: ${props => (props.samePath ? "none" : "initial")};
  border: 0;
  outline: none;
  padding: 0;
  cursor: pointer;
  outline: 0;
  font-size: 1rem;
  font-family: "Kollektif";
`;

const Hamburger = styled.div`
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
    -webkit-transition: width 400ms ease-out;
    -moz-transition: width 400ms ease-out;
    -o-transition: width 400ms ease-out;
    transition: width 400ms ease-out;
  }
  &.grow-exit {
    width: ${metrics.headerHeight / 3}px;
  }
  &.grow-exit.grow-exit-active {
    width: 0px;
  }
`;

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
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
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
    -webkit-transition: height 400ms ease-out;
    -moz-transition: height 400ms ease-out;
    -o-transition: height 400ms ease-out;
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

const MenuButton = styled.div`
  height: ${metrics.headerHeight / 3}px;
  width: ${metrics.headerHeight / 3}px;
  z-index: 30;
`;

const HeaderWithRouter = props => {
  const { userState } = useContext(UserContext);
  const userId = userState.userId;
  const { page, setOverlay } = useContext(OverlayContext);
  const pushTo = path => {
    props.location.pathname !== path && props.history.push(path);
  };

  const toggleMenu = () => {
    page ? setOverlay(null) : setOverlay("menu");
  };

  const menuButtonState = () => {
    return page ? (
      <CSSTransition key="close" timeout={1000} classNames="grow">
        <Close />
      </CSSTransition>
    ) : (
      <CSSTransition key="hamburger" timeout={1000} classNames="grow">
        <Hamburger>
          <div>
            <span />
            <span />
            <span />
          </div>
        </Hamburger>
      </CSSTransition>
    );
  };

  return (
    <Header {...props}>
      <HeaderInner>
        <CompanyLogo
          onClick={() => (userId ? pushTo("/dashboard") : pushTo("/"))}>
          REACT-FIREBASE-ESSENTIALS
        </CompanyLogo>
        {userId && (
          <MenuButton onClick={toggleMenu}>
            <TransitionGroup appear>{menuButtonState()}</TransitionGroup>
          </MenuButton>
        )}
      </HeaderInner>
    </Header>
  );
};

export default withRouter(HeaderWithRouter);
