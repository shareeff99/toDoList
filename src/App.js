import "./App.css";
import { useState, useEffect } from "react"; // imported useState hook from react library
import IndivTaskShareef from "./Components/IndivTaskShareef"; // importing component from path


function App() {
  // creating a state for each task
  const [taskName, setTaskName] = useState(""); // each individual task
  const [taskList, setTaskList] = useState([]); // all the tasks in our list
  const [taskEmail, setTaskEmail] = useState(""); // email for the task

  useEffect(() => {
    console.log(taskName);
    console.log("list of tasks" + taskList);
  });

  // creating a function to add the task to the list of tasks
  const addTask = () => {
    setTaskList([...taskList, { task: taskName, email: taskEmail}]);
    setTaskName(""); // after we add the current task to the array, we need to reset the state back to a null value
    setTaskEmail("");
  };

  return (
    <>
      {" "}
      {/* wrapping the whole div within a fragment */}
      <div className="App">
        <h1> To do List </h1>
        <label for="task">Task Name:</label>
        <input
          type="text"
          id="task"
          onChange={(event) => {
            setTaskName(event.target.value);
          }}
        />

        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={(event) => {
            setTaskEmail(event.target.value);
          }}
        ></input>

        <button onClick={addTask}>Add Task</button>
      </div>


      <div className="taskContainer">
        {taskList.map((element) => {
          return (
            <IndivTaskShareef
              taskname={element.task}
              email={element.email}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
