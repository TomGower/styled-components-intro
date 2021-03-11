import React from "react";
import styled from "styled-components";

const ButtonStyling = styled.button`
  display: flex;
  justify-content: center;
  background-color: white;
  padding: 5px;
  margin: 5px;
  border-radius: 15px;
`;

function Button() {
  return <ButtonStyling>Click me!</ButtonStyling>;
}

export default Button;
