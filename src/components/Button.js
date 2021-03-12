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

const ReversedButton = (props) => (
  <StyledButton {...props} children={props.children.split("").reverse()} />
);

function Button({ primary, text }) {
  return (
    <StyledButton as={ReversedButton} primary={primary}>
      {text}
    </StyledButton>
  );
}

export default Button;
