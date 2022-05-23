import React from "react";
import Task from "../Task/Task";
import styles from "./tasks.module.css";

const Tasks = ({tasks, deleteTodo,handleChecked}) => {
  // NOTE: do not delete `data-cy` key value pair
  // console.log(tasks)
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
        {tasks.map((task) => (
          <Task key={task.id} task={task} deleteTodo={deleteTodo} handleChecked={handleChecked}/>
        ))}        
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
        
      </div>
    </>
  );
};

export default Tasks;
