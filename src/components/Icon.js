import React from "react";
import styled from "styled-components";

const StyledIcon = styled.div`
  background-color: ${({ statusColor }) => {
    if (statusColor === "ready") return "yellow";
    if (statusColor === "steady") return "orange";
    if (statusColor === "go") return "green";
    return "red";
  }};
  height: 30px;
  width: 30px;
  border-radius: 15px;
  margin: 5px;
  border-color: blue;
  border: ${({ border }) => border || "3px solid blue"};
  margin-left: ${({ status }) => {
    if (status === "in-progress") return "70px";
    if (status === "done") return "140px";
    return "5px";
  }};

  &:hover {
    background-color: gray;
  }
`;

function Icon({ statusColor, border, status }) {
  return (
    <StyledIcon statusColor={statusColor} border={border} status={status} />
  );
}

export default Icon;
