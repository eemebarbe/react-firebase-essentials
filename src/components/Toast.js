import styled from "styled-components";
import React from "react";
import { ToastConsumer } from "../contexts/toastContext";

const Toast = styled.div`
  min-height: 60px;
  min-width: 120px;
  background-color: red;
  bottom: 0px;
  right: 0px;
  position: absolute;
`;

const ToastWithContext = props => {
  return <Toast>{props.toastContext.message}</Toast>;
};

export default ToastConsumer(ToastWithContext);
