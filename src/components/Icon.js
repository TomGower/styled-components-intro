import React from "react";
import styled from "styled-components";

const StyledIcon = styled.div`
  background-color: ${({ primary }) => (primary ? "green" : "yellow")};
  height: 30px;
  width: 30px;
  border-radius: 15px;
  margin: 5px;
  border-color: blue;
  border: ${({ border }) => border || "3px solid blue"};
`;

function Icon({ primary, border }) {
  return <StyledIcon primary={primary} border={border} />;
}

export default Icon;
