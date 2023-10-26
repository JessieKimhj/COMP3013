import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsCheckCircleFill } from "react-icons/bs";

type AssignmentProps = { 
  assignments: { id: string; text: string; isChecked: boolean; dueDate: Date | undefined }[];
  checkBoxHandler: (i: string) => void;
  deleteHandler: (i: string) => void;
}
export function Assignment({ 
  assignments, 
  deleteHandler, 
  checkBoxHandler
} 
  :AssignmentProps) {
  const dueDateCalculator = (dueDate: Date | undefined): string => {
    if (dueDate) {
      const dueDateObj = new Date(dueDate);
      const today = new Date();
      const timeDifference = dueDateObj.getTime() - today.getTime();
      const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); 
      if (daysLeft > 1) {
        return `${daysLeft} days`;
      } else if (daysLeft === 1) {
        return 'tomorrow';
      } else if (daysLeft === 0) {
        return 'today';
      }
    }
  
    return 'N/A';
  };
    return (
      <div>
        <ul>
          {assignments.map((assignment) => (
            <div key={assignment.id} className={styles.assignment}>
              <button onClick={()=>checkBoxHandler(assignment.id)} className={ styles.checkContainer}>
                {assignment.isChecked ? (
                    <BsCheckCircleFill size={20}  style={{backgroundColor: "white", borderRadius: "999px"}}/>
                  ) : (<div/>)}
              </button>
              <p className={`${styles.assignmentList} ${assignment.isChecked ? styles.textCompleted : ''}`}>{assignment.text}</p>
              <p className={`${styles.dueDateContainer} 
                ${dueDateCalculator(assignment.dueDate) === 'tomorrow' || dueDateCalculator(assignment.dueDate) === 'today'
                ? styles.dueDateExpired : styles.dueDateNotExpired}`}
              >
                Due : {dueDateCalculator(assignment.dueDate)} 
              </p>
              <button onClick={()=>deleteHandler(assignment.id)} className={styles.deleteButton}>
                <TbTrash size={20} />
              </button>
            </div>
          ))}
      </ul>
    </div>
  );
}
