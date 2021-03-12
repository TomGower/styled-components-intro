import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Icon from "./Icon";

const Section = styled.div`
  background-color: #aac9f0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 15px;
`;

const Title = styled.h1`
  color: #aaecf0;
`;

const Subtitle = styled(Title)`
  font-size: 12px;
  align-self: center;
`;

const ParagraphTitle = styled(Subtitle)`
  color: grey;
`;

const ReversedTitle = (props) => (
  <ParagraphTitle {...props} children={props.children.split("").reverse()} />
);

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
        <ParagraphTitle as={ReversedTitle}>
          Demonstration of Mini-Challenge
        </ParagraphTitle>
      </Section>
    </>
  );
};

export default Content;
