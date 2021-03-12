import React from "react";
import ProjectTitle from "./components/ProjectTitle";
import WeekdayTitle from "./components/WeekdayTitle";

const days = [
  { date: "M", progress: 10, id: 1 },
  { date: "T", progress: 80, id: 2 },
  { date: "W", progress: 40, id: 3 },
  { date: "T", progress: 60, id: 4 },
  { date: "F", progress: 50, id: 5 },
  { date: "S", progress: 100, id: 6 },
  { date: "S", progress: 0, id: 7 },
];

const App = () => {
  return (
    <div>
      <ProjectTitle />
      {days.map(({ date, progress, id }) => (
        <WeekdayTitle date={date} progress={progress} id={id} key={id} />
      ))}
    </div>
  );
};

export default App;
