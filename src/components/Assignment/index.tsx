import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsCheckCircleFill } from "react-icons/bs";

type AssignmentProps = { 
  assignments: { id: string; text: string, isChecked: boolean }[];
  checkBoxHandler: (i: string) => void;
  deleteHandler: (i: string) => void;
}
export function Assignment({ 
  assignments, 
  deleteHandler, 
  checkBoxHandler} 
  :AssignmentProps) {

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
              <p>{assignment.text}</p>
              <button onClick={()=>deleteHandler(assignment.id)} className={styles.deleteButton}>
                <TbTrash size={20} />
              </button>
            </div>
          ))}
      </ul>
    </div>
  );
}
