import React, { useState } from "react";
import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader";
import AddTask from "./AddTask/AddTask";
import Tasks from "./Tasks/Tasks";
import tasks from "../data/tasks.json"

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value 
  const [todos, setTodos] = useState(tasks)
  let initialun = todos.filter((todo) => todo.done === false)
  // console.log(initialun.length)  
  const [unCompletedTask, setUnCompletedTask] = useState(initialun.length) 
  const addTodo = (newTodo) => {
    setTodos([
      ...todos,
      {
        id: todos.length+1,
        text: newTodo,
        done: false,
        count: 20,
      }
    ])
  }

  const deleteTodo = (id) => {
    // console.log(id)
    let changedTodo = todos.filter((todo) => todo.id !== id)
    setTodos(changedTodo)
  }

  const handleChecked = (id) => {
    // console.log(id)
    let checkedArr = todos.filter((todo) => todo.done === false)
    setUnCompletedTask(checkedArr.length)
  }

  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      <h1>Todo List</h1>
      <TaskHeader totalTask={todos.length} unCompletedTask={unCompletedTask}/>
      {/* Add Task */}
      <AddTask addTodo={addTodo}/>
      {/* Tasks */}
      <Tasks tasks={todos} deleteTodo={deleteTodo} handleChecked={handleChecked}/>
    </div>
  );
};

export default TaskApp;
