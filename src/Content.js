import React from "react";
import styled from "styled-components";
import Button from "./Button";

const TitleStyling = styled.h1`
  color: #aac9f0;
`;

const SectionStyling = styled.div`
  background-color: #f0d1aa;
  display: flex;
  justify-content: center;
  color: #f0aeaa;
  border-radius: 15px;
`;

const Content = () => {
  return (
    <>
      <SectionStyling>
        <TitleStyling>💅 Section</TitleStyling>
      </SectionStyling>
    </>
  );
};

export default Content;
