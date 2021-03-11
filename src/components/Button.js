import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  background-color: ${({ primary }) => (primary ? "red" : "blue")};
  padding: 5px;
  margin: 5px;
  border-radius: 15px;
`;

function Button({ primary, text }) {
  return <StyledButton primary={primary}>{text}</StyledButton>;
}

export default Button;
