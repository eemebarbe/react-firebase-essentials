import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Motion, spring } from "react-motion";
import { ToastContext } from "../contexts/toastContext";
import { metrics } from "../themes";

const ToastContainer = styled.div`
  z-index: 2;
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: -${metrics.baseUnit * 8}px;
  pointer-events: none;
  transform: ${props => "translateY(" + props.motionStyle.y + "px)"};
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
      width: ${metrics.baseUnit * 32}px;
      line-height: ${metrics.baseUnit * 2}px;
      color: white;
      background-color: red;
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
    <Motion
      defaultStyle={{ y: 0 }}
      style={{
        y: spring(show ? -108 : 0)
      }}
      onRest={onRest}>
      {motionStyle => (
        <ToastContainer {...props} id="container" motionStyle={motionStyle}>
          <div {...props}>
            <div {...props}>
              <div {...props}>{message}</div>
            </div>
          </div>
        </ToastContainer>
      )}
    </Motion>
  );
};

export default ToastWithContext;
