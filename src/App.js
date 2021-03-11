import React from "react";
import ProjectTitle from "./ProjectTitle";
import WeekdayTitle from "./WeekdayTitle";

const days = ["M", "Tu", "W", "Th", "F", "Sa", "Su"];

const App = () => {
  return (
    <div>
      <ProjectTitle />
      {days.map((day) => (
        <WeekdayTitle day={day} key={day} />
      ))}
    </div>
  );
};

export default App;
