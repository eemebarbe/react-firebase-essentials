import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { OverlayContext } from "../contexts/overlayContext";
import { UserContext } from "../contexts/userContext";
import styled from "styled-components";
import { metrics, colors, icons } from "../themes";

const Header = styled.div`
  width: 100%;
  height: ${metrics.mobileHeaderHeight - 1}px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${colors.inactive};
  @media (max-width: 480px) {
    display: none;
  }
`;

const CompanyLogo = styled.button`
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
  height: ${metrics.mobileHeaderHeight / 3}px;
  width: ${metrics.mobileHeaderHeight / 3}px;
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
    border-top: 1px solid ${colors.maintext};
  }
  &.grow-appear,
  &.grow-enter {
    width: 0px;
    z-index: 1;
  }
  &.grow-appear-active,
  &.grow-enter.grow-enter-active {
    width: ${metrics.mobileHeaderHeight / 3}px;
    transition: width 400ms ease-out;
    -webkit-transition: width 400ms ease-out;
    -moz-transition: width 400ms ease-out;
    -o-transition: width 400ms ease-out;
    transition: width 400ms ease-out;
  }
  &.grow-exit {
    width: ${metrics.mobileHeaderHeight / 3}px;
  }
  &.grow-exit.grow-exit-active {
    width: 0px;
  }
`;

const Close = styled.div`
  position: absolute;
  flex-direction: column;
  justify-content: center;
  height: ${metrics.mobileHeaderHeight / 3}px;
  width: ${metrics.mobileHeaderHeight / 3}px;
  &:before,
  &:after {
    position: absolute;
    margin-left: ${metrics.baseUnit}px;
    content: " ";
    height: ${metrics.baseUnit * 3 - 2}px;
    width: 1px;
    background-color: #333;
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

const MenuButton = styled.div`
  height: ${metrics.mobileHeaderHeight / 3}px;
  width: ${metrics.mobileHeaderHeight / 3}px;
  z-index: 6;
`;

const HeaderWithRouter = props => {
  const { userState } = useContext(UserContext);
  const userId = userState.userId;
  const { page, setPage } = useContext(OverlayContext);
  const pushTo = path => {
    props.location.pathname !== path && props.history.push(path);
  };

  const toggleMenu = () => {
    page ? setPage(null) : setPage("menu");
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
    <Header>
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
