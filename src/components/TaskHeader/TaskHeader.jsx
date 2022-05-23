import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({totalTask,unCompletedTask}) => {
  // sample values to be replaced
  // let totalTask = 0;
  // let unCompletedTask = 0;

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      <h4>you have </h4>
      <h4><b data-cy="header-remaining-task"> {unCompletedTask} </b></h4>     
       <h4> of </h4>
       <h4><b data-cy="header-total-task"> {totalTask} </b></h4>      
      <h4>tasks remaining
      </h4>
    </div>
  );
};

export default TaskHeader;
