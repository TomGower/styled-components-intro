import React from "react";
import styled from "styled-components";

const StyledProgressBar = styled.div`
  background-color: ${({ progress }) => {
    if (progress === 100) return "red";
    if (progress > 75) return "green";
    if (progress > 50) return "blue";
    if (progress > 25) return "yellow";
    return "cyan";
  }};
  height: 50px;
  width: ${({ progress }) => (progress ? `${progress}%` : "0%")};
`;

const TodayProgressBar = styled(StyledProgressBar)`
  background-color: purple;
`;

const StyledProgressSection = styled.div`
  width: 250px;
`;

function ProgressBar({ progress, isToday }) {
  return (
    <StyledProgressSection>
      {isToday && <TodayProgressBar progress={progress} />}
      {!isToday && <StyledProgressBar progress={progress} />}
    </StyledProgressSection>
  );
}

export default ProgressBar;
