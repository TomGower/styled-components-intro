import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Icon from "./Icon";

const StyledTitle = styled.h1`
  color: #aac9f0;
`;

const StyledSection = styled.div`
  background-color: #f0d1aa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #f0aeaa;
  border-radius: 15px;
`;

const Content = () => {
  return (
    <>
      <StyledSection>
        <StyledTitle>💅 Section</StyledTitle>
        <Button primary text={"Click me!"} />
        <Button text={"Click me too!"} />
        <Icon primary />
        <Icon />
      </StyledSection>
    </>
  );
};

export default Content;
