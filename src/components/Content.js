import React from "react";
import styled, { keyframes } from "styled-components";
import Button from "./Button";
import Icon from "./Icon";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Section = styled.div`
  background-color: #aac9f0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 15px;
`;

const Title = styled.h1`
  color: #aaecf0;
  /* animation: 5s ${fadeIn} ease-in; */
  animation: 2s ${rotate} linear infinite;
  /* transition-duration: 0.8s;
  transition-property: transform;

  &:hover {
    transform: rotate(360deg);
    --webkit-transform: rotate(360deg);
  } */
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
        <Icon border="solid 3px black" statusColor={"steady"} />
        <Icon status={"in-progress"} />
        <ParagraphTitle as={ReversedTitle}>
          Demonstration of Mini-Challenge
        </ParagraphTitle>
      </Section>
    </>
  );
};

export default Content;
