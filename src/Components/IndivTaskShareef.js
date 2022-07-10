import React from "react";
import "./taskBox.css";

// this component is going to accept the taskName and email props
const IndivTaskShareef = ({ taskname, email }) => {
  return (
    <div className="taskContainer">
      <h1>Task Name: {taskname}</h1>
      <h2>Email: {email}</h2>
    </div>
  );
};

export default IndivTaskShareef;
