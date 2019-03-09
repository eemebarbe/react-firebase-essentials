import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { OverlayContext } from "../contexts/overlayContext";
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

const Hamburger = styled.button`
  background-color: #ff3264;
  display: block;
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: 0;
  width: 108px;
  height: 96px;
  font-size: 0;
  text-indent: -9999px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  box-shadow: none;
  border-radius: none;
  border: none;
  cursor: pointer;
  -webkit-transition: background 0.3s;
  transition: background 0.3s;
  &:focus {
    outline: none;
  }
  &:active {
    background-color: #cb0032;
  }
  span {
    display: block;
    position: absolute;
    top: 50%;
    left: 18px;
    right: 18px;
    height: 1px;
    background: white;
    -webkit-transition: background 0 0.3s;
    transition: background 0 0.3s;
    &:before,
    &:after {
      position: absolute;
      display: block;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #fff;
      content: "";
      -webkit-transition-duration: 0.3s, 0.3s;
      transition-duration: 0.3s, 0.3s;
      -webkit-transition-delay: 0.3s, 0;
      transition-delay: 0.3s, 0;
    }
    &:before {
      top: -27px;
      -webkit-transition-property: top, -webkit-transform;
      transition-property: top, transform;
    }

    &:after {
      bottom: -27px;
      -webkit-transition-property: bottom, -webkit-transform;
      transition-property: bottom, transform;
    }
    &:active {
      background: none;
      &:before,
      &:after {
        -webkit-transition-delay: 0, 0.3s;
        transition-delay: 0, 0.3s;
      }
      &:before {
        top: 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }
      &:after {
        bottom: 0;
        -webkit-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }
    }
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
  margin-right: ${metrics.baseUnit};
  z-index: 6;
`;

const HeaderWithRouter = props => {
  const { page, setPage } = useContext(OverlayContext);
  const pushTo = path => {
    props.location.pathname !== path && props.history.push(path);
  };

  const toggleMenu = () => {
    page ? setPage(null) : setPage("menu");
  };

  return (
    <Header>
      <HeaderInner>
        <div onClick={() => pushTo("/dashboard")}>
          REACT-FIREBASE-ESSENTIALS
        </div>
        <MenuButton onClick={toggleMenu}>
          <Hamburger>
            <span>toggle menu</span>
          </Hamburger>
        </MenuButton>
      </HeaderInner>
    </Header>
  );
};

export default withRouter(HeaderWithRouter);
