import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Motion, spring } from "react-motion";
import { ToastContext } from "../contexts/toastContext";
import { metrics } from "../themes";

const Toast = styled.div`
  visibility: ${props => props.visibility};
  min-height: ${metrics.baseUnit * 4}px;
  width: ${metrics.baseUnit * 32}px;
  font-size: 16px;
  line-height: ${metrics.baseUnit * 2}px;
  color: white;
  background-color: red;
  display: flex;
  justify-content: center;
  align-content: center;
  font-family: "Kollektif-Bold";
`;

const ToastInner = styled.div`
  color: white;
  padding: ${metrics.baseUnit * 2}px;
  width: 100%;
  text-align: center;
`;

const ToastContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: -${metrics.baseUnit * 4}px;
  pointer-events: none;
  transform: ${props => "translateY(" + props.motionStyle.y + "px)"};
`;

const ToastContainerInner = styled.div`
  width: ${metrics.bodyWidth}px;
  display: flex;
  justify-content: flex-end;
`;

const ToastWithContext = () => {
  const [show, setShow] = useState(false);
  const { message, sendMessage } = useContext(ToastContext);

  useEffect(() => {
    if (message) {
      setShow(true);
    }
  }, [message]);

  return (
    <Motion
      defaultStyle={{ y: 0, opacity: 0 }}
      style={{
        y: spring(show ? -60 : 0),
        opacity: spring(show ? 1 : 0)
      }}>
      {motionStyle => (
        <ToastContainer motionStyle={motionStyle}>
          <ToastContainerInner>
            <Toast>
              <ToastInner>{message}</ToastInner>
            </Toast>
          </ToastContainerInner>
        </ToastContainer>
      )}
    </Motion>
  );
};

export default ToastWithContext;
