import React from "react";
import styled from "styled-components";
import { metrics } from "../themes";

const Switched = styled.label`
  position: relative;
  display: inline-block;
  width: ${metrics.baseUnit * 6}px;
  height: ${metrics.baseUnit * 3}px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.theme.overlayDetail};
    transition: 0.4s;
    border-radius: ${metrics.baseUnit * 3}px;
    &:before {
      position: absolute;
      content: "";
      height: ${metrics.baseUnit * 2}px;
      width: ${metrics.baseUnit * 2}px;
      left: ${metrics.baseUnit / 2}px;
      bottom: ${metrics.baseUnit / 2}px;
      background-color: ${props => props.theme.detailText};
      transition: 0.4s;
      border-radius: 50%;
    }
  }
  input:checked + span {
    background-color: ${props => props.theme.overlayDetail};
  }

  input:checked + span:before {
    transform: translateX(${metrics.baseUnit * 3}px);
  }
`;

const Switch = props => {
  return (
    <Switched>
      <input
        type="checkbox"
        onChange={props.onChange}
        checked={props.checked}
      />
      <span />
    </Switched>
  );
};

export default Switch;
