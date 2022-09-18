import { useState } from "react";
import "./App.css";
import TaskBars from "./component/TaskBars";

function App() {
  // make an array that stores the input data using useState
  // make another one that takes in the user input and
  // makes it the taskName
  const [list, setList] = useState([]);
  const [taskName, setTaskName] = useState("");

  const [deletedTasks, setDeletedTasks] = useState([]);
  // make a function that creates new Todo's with unique id
  // and then set the newTodo to a new list created through ...
  // after that finally clear input box by setting the taskname
  // string value as empty string
  const createTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };
    setList([...list, newTodo]);
    setTaskName("");
  };
  // make a function that deletes specified components
  // start it off by taking in the unique id of the components
  // after make a filtered list with the todos and return the function by setting the
  // todo id as NAN
  // after filtering the list, set the list as the new filtered list
  const deleteItem = (id) => {
    const filteredList = list.filter((todo) => {
      return todo.id !== Number(id);
    });
    const deletedTask = list.find((todo) => {
      return todo.id === Number(id);
    });
    setDeletedTasks([...deletedTasks, deletedTask]);
    setList(filteredList);
  };
  const moveDeletedTasks = () => {};

  return (
    <div className="mainContainer">
      <div className="navBar">
        <h1 id="navTitle">ToDo List</h1>
      </div>
      <div className="centerContentContainer">
        <div className="centerContent">
          <h1 id="contentTitle">ToDo List</h1>
          <div className="taskBarContainer">
            <div id="taskBar">
              <input
                type="text"
                id="taskInput"
                placeholder="New Task"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              ></input>
            </div>
            <button onClick={() => createTodo(taskName)}>Add</button>
          </div>
          <div className="taskContainers">
            <div className="checkListContainer">
            <h1>Tasks</h1>
              {
                // start off by mapping the todo list and
                // add all the attributes like the label,
                // onDelete and the id's for all the taskbars
                list.map((todo) => {
                  return (
                    <TaskBars
                      key={todo.id}
                      id={todo.id}
                      label={todo.todo}
                      checked={false}
                      done={false}
                      onDelete={deleteItem}
                    />
                  );
                })
              }
            </div>
            <div className="deletedTasks">
              <h1>Deleted tasks</h1>
              {deletedTasks.map((todo) => {
                return (
                  <TaskBars
                    key={todo.id}
                    id={todo.id}
                    label={todo.todo}
                    checked={false}
                    done={false}
                    onDelete={deleteItem}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
