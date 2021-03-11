import React from "react";
import styled from "styled-components";

const StyledIcon = styled.div`
  background-color: ${({ primary }) => (primary ? "green" : "yellow")};
  height: 30px;
  width: 30px;
  border-radius: 15px;
  margin: 5px;
`;

function Icon({ primary }) {
  return <StyledIcon primary={primary} />;
}

export default Icon;
