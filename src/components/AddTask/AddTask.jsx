import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({addTodo}) => {
  // NOTE: do not delete `data-cy` key value pair
  let [value, setValue] = useState("")
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" 
      type="text" placeholder="Add task"
      value={value}
      onChange={(e) => setValue(e.target.value)} />
      <button data-cy="add-task-button"
      onClick={() => {
        addTodo(value)
        setValue("")
      }}      
      >      
      +</button>
    </div>
  );
};

export default AddTask;
