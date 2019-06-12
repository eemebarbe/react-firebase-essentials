import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { ToastContext } from "../contexts/toastContext";
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
  bottom: -${metrics.baseUnit * 8}px;
  pointer-events: none;
  @media (max-width: 480px) {
    bottom: ${-(metrics.baseUnit * 8) + metrics.mobileMenuHeight}px;
  }
  div {
    padding: 0px ${metrics.baseUnit * 2}px;
    width: ${metrics.bodyWidth}px;
    display: flex;
    justify-content: flex-end;
    font-size: 1.5rem;
    @media (max-width: 480px) {
      width: 100%;
      padding: 0;
      margin: 0px ${metrics.baseUnit}px;
      font-size: 1.25rem;
    }
    div {
      visibility: ${props => props.visibility};
      border-radius: ${metrics.globalBorderRadius}px;
      padding: 0;
      width: ${metrics.bodyWidth / 2}px;
      line-height: ${metrics.baseUnit * 2}px;
      color: white;
      background-color: ${props => props.theme.secondaryColor};
      display: flex;
      justify-content: center;
      align-content: center;
      font-family: "Kollektif-Bold";
      div {
        color: white;
        padding: ${metrics.baseUnit * 2}px;
        width: 100%;
        text-align: center;
      }
    }
  }
`;

const ToastWithContext = props => {
  const [show, setShow] = useState(false);
  const { message, sendMessage } = useContext(ToastContext);

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
          id="container"
          style={{
            ...transitionStyles[motionState]
          }}>
          <div {...props}>
            <div {...props}>
              <div {...props}>{message}</div>
            </div>
          </div>
        </ToastContainer>
      )}
    </Transition>
  );
};

export default ToastWithContext;
