import styled from "styled-components";
import React, { useContext } from "react";
import { ToastContext } from "../contexts/toastContext";

const Toast = styled.div`
  min-height: 60px;
  min-width: 180px;
  background-color: red;
  bottom: 12px;
  right: 12px;
  position: absolute;
`;

const ToastWithContext = () => {
  const { message } = useContext(ToastContext);
  return <Toast>{message}</Toast>;
};

export default ToastWithContext;
