import React from "react";
import Part from "./Part";

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part, index) => {
        return <Part key={index} part={part.name} exercises={part.exercises} />;
      })}
    </>
  );
};

export default Content;
