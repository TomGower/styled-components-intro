import React from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";

const StyledSection = styled.div`
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

const StyledWeekdayTitle = styled.div`
  display: flex;
  justify-content: center;
  min-width: 50px;
  border-right: solid 3px lightgrey;
  color: ${({ isToday }) => {
    if (isToday) return "blue";
  }};
`;

const WeekendTitle = styled(StyledWeekdayTitle)`
  color: green;
  background-color: lightgrey;
  border-radius: 7px 0 0 7px;
`;

function WeekdayTitle({ date, progress, id }) {
  const isToday = new Date().getDay() === id % 7;
  return (
    <StyledSection>
      {date && date[0] === "S" ? (
        <WeekendTitle isToday={isToday}>{date}</WeekendTitle>
      ) : (
        <StyledWeekdayTitle isToday={isToday}>{date}</StyledWeekdayTitle>
      )}
      <ProgressBar progress={progress} isToday={isToday} />
    </StyledSection>
  );
}

export default WeekdayTitle;
