import React from "react";
import styled from "styled-components";

const SectionStyled = styled.div`
  background-color: #ffffff;
  border: solid 3px grey;
  margin: 4px;
  width: 300px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: left;
  font-size: 40px;
  color: #ff6961;
`;

function Section(children) {
  return <SectionStyled>{children}</SectionStyled>;
}

export default Section;
