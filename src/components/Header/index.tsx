import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { DayPicker } from 'react-day-picker';
import { BsFillCalendarDateFill } from "react-icons/bs";
import { useState } from "react";
import 'react-day-picker/dist/style.css';


type HeaderProps = {
  assignmentValue : string;
  setAssignmnetValue : (i: string) => void;
  handleSubmit: (event: any) => void;
}
export function Header({
  assignmentValue, 
  setAssignmnetValue,
  handleSubmit,
}: 
HeaderProps) {
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [selected, setSelected] = useState<Date | undefined>(undefined);
  const toggleCalendar = () => {
    setCalendarVisible(!calendarVisible);
  };
  const submitHanddler = (e: React.FormEvent) =>{
    e.preventDefault();
    handleSubmit(selected);
    setSelected(undefined);
  }

  return (
    <header className={styles.header}>
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
        <form 
          onSubmit={submitHanddler} 
          className={styles.newAssignmentForm }
        >
          <input 
            placeholder="Add a new assignment" 
            type="text" 
            value={assignmentValue}
            onChange={(e) => 
            setAssignmnetValue(e.target.value)}/>
          <button 
            className={styles.buttonFrom} 
            type="button" 
            onClick={toggleCalendar}
          >
            <BsFillCalendarDateFill size={20} />
          </button>
          <div 
            className={styles.CalenderBox} 
            onBlur={toggleCalendar}
          >
          {calendarVisible && (
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
              fromDate={new Date()}
            />
          )}
        </div>
          <button 
            className={styles.buttonFrom} 
            type="submit" 
            disabled={!selected || assignmentValue.length === 0}
          >
            Create <AiOutlinePlusCircle size={20} />
          </button>
        </form>
    </header>
  );
}
