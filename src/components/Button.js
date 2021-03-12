import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ primary }) => (primary ? "red" : "blue")};
  display: flex;
  justify-content: center;
  padding: 5px;
  margin: 5px;
  border-radius: 15px;
  flex-direction: column;

  &:hover {
    background-color: grey;
  }

  .subtext {
    font-size: 10px;
  }
`;

const ReversedButton = (props) => (
  <StyledButton {...props} children={props.children.split("").reverse()} />
);

function Button({ primary, text }) {
  return (
    <StyledButton primary={primary}>
      {text}
      <p className="subtext">Subtext</p>
    </StyledButton>
  );
}

export default Button;
