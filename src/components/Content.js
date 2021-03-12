import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Icon from "./Icon";

const Title = styled.h1`
  color: #aac9f0;
`;

const Subtitle = styled(Title)`
  font-size: 12px;
  align-self: center;
`;

const ParagraphTitle = styled(Subtitle)`
  color: grey;
`;

const Section = styled.div`
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
      <Section>
        <Title>💅 Section</Title>
        <Subtitle>I am a subtitle</Subtitle>
        <Button primary text={"Click me!"} />
        <Button text={"Click me too!"} />
        <Icon primary />
        <Icon />
        <ParagraphTitle>Demonstration of Mini-Challenge</ParagraphTitle>
      </Section>
    </>
  );
};

export default Content;
