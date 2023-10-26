import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";
// import { useState } from "react";

type AssignmentsProps = { 
  assignments: { id: string; text: string; isChecked: boolean; dueDate: Date | undefined }[];
  setAssignments : React.Dispatch<React.SetStateAction<{ id: string; text: string; isChecked: boolean; dueDate: Date | undefined; }[]>>;
  completedAssignments: number;
  setCompletedAssignments: (i: number) => void;
}

export function Assignments({ 
  assignments, 
  setAssignments,
  completedAssignments, 
  setCompletedAssignments 
}:
AssignmentsProps) {
  const assignmentsLength = assignments.length;
  
  const checkBoxHandler = (uuidKey: string) => {
    const checkBoxToToggle = assignments.find((assignment) => assignment.id === uuidKey);
    if (checkBoxToToggle) {
      checkBoxToToggle.isChecked = !checkBoxToToggle.isChecked;
      setAssignments([...assignments]);       
      setCompletedAssignments(checkBoxToToggle.isChecked ? completedAssignments + 1: completedAssignments - 1)
    }
  };

  const deleteHandler = (uuidKey: string) => {
    const assignmentToDelete = assignments.find((assignment) => assignment.id === uuidKey);
    if (assignmentToDelete?.isChecked) {
      setCompletedAssignments(completedAssignments - 1);
    }
    const remainingAssignments = assignments.filter((assignment) => assignment.id !== uuidKey);
    setAssignments(remainingAssignments);
  };

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignmentsLength}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{completedAssignments} of {assignmentsLength}</span>
        </div>
      </header>

      <div className={styles.list}>
      {
        <Assignment
        assignments={assignments}
        deleteHandler={deleteHandler}
        checkBoxHandler={checkBoxHandler}
        />
        }
      </div>
    </section>
  );
}
