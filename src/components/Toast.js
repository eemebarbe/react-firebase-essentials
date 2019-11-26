import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { ToastContext } from "../contexts/toastContext";
import { UserContext } from "../contexts/userContext";
import { metrics } from "../themes";
import Transition from "react-transition-group/Transition";

const transitionStyles = {
  entered: {
    transform: `translateY(-${metrics.baseUnit * 9}px)`,
    transition: `transform 400ms ease-in-out`
  },
  exiting: {
    transform: "translateY(0px)",
    transition: `transform 400ms ease-in-out`
  },
  exited: {
    transform: "translateY(0px)"
  }
};

const ToastContainer = styled.div`
  z-index: 2;
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: -${metrics.baseUnit * 7}px;
  pointer-events: none;
  @media (max-width: 480px) {
    bottom: ${props =>
      -(metrics.baseUnit * 8) + (props.loggedIn && metrics.mobileMenuHeight)}px;
  }
  div {
    padding: 0px ${metrics.baseUnit * 2}px;
    width: ${metrics.bodyWidth}px;
    display: flex;
    justify-content: flex-end;
    font-size: ${metrics.regularText}px;
    @media (max-width: 480px) {
      width: 100%;
      padding: 0;
      margin: 0px ${metrics.baseUnit}px;
      font-size: ${metrics.smallText}px;
    }
    div {
      visibility: ${props => props.visibility};
      border-radius: ${metrics.globalBorderRadius}px;
      padding: 0;
      width: ${metrics.bodyWidth / 2}px;
      line-height: ${metrics.baseUnit * 2}px;
      color: ${props => props.theme.detailText};
      background-color: ${props => props.theme.secondaryColor};
      display: flex;
      justify-content: center;
      align-content: center;
      font-weight: 700;
      div {
        color: ${props => props.theme.detailText};
        padding: ${metrics.baseUnit * 2}px;
        width: 100%;
        text-align: center;
        @media (max-width: 480px) {
          padding: ${metrics.baseUnit}px;
        }
      }
    }
  }
`;

const ToastWithContext = props => {
  const [show, setShow] = useState(false);
  const { message, sendMessage } = useContext(ToastContext);
  const { userState } = useContext(UserContext);

  useEffect(() => {
    if (message) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 4000);
    }
  }, [message]);

  const onRest = () => {
    !show && sendMessage("");
  };

  return (
    <Transition in={show} timeout={400} onExited={onRest}>
      {motionState => (
        <ToastContainer
          {...props}
          loggedIn={userState.userData.firstName}
          id="container"
          style={{
            ...transitionStyles[motionState]
          }}
        >
          <div>
            <div>
              <div>{message}</div>
            </div>
          </div>
        </ToastContainer>
      )}
    </Transition>
  );
};

export default ToastWithContext;
