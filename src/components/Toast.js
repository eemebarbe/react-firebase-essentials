import styled from "styled-components";
import React, { useContext, useState, useEffect } from "react";
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
  bottom: ${metrics.baseUnit}px;
  pointer-events: none;
`;

const ToastContainerInner = styled.div`
  width: ${metrics.bodyWidth}px;
  display: flex;
  justify-content: flex-end;
`;

const ToastWithContext = () => {
  const [visibility, setVisibility] = useState("hidden");
  const { message, sendMessage } = useContext(ToastContext);

  useEffect(() => {
    if (message) {
      setVisibility("visible");
      setTimeout(() => {
        sendMessage("");
        setVisibility("hidden");
      }, 3000);
    }
  }, [message]);

  return (
    <ToastContainer>
      <ToastContainerInner>
        <Toast visibility={visibility}>
          <ToastInner>{message}</ToastInner>
        </Toast>
      </ToastContainerInner>
    </ToastContainer>
  );
};

export default ToastWithContext;
