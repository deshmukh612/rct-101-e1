import React, { useState } from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter"

const Task = ({task,deleteTodo,handleChecked}) => {
  // NOTE: do not delete `data-cy` key value pair
  // console.log(task)
  let [isDone, setIsDone] = useState(task.done)
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox"
      checked={isDone}
      onChange={(e) => {
        setIsDone(e.target.checked)
        handleChecked(task.id)
      }}
       />
      <div data-cy="task-text">{task.text}</div>
      {/* Counter here */}
      <Counter initial={task.count} />
      <button data-cy="task-remove-button"
      onClick={() => deleteTodo(task.id)}
      >𐤕</button>
    </li>
  );
};

export default Task;
