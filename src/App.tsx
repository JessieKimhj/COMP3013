import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [assignments, setAssignments] = useState<{ id: string, text: string, isChecked: boolean, dueDate: Date | undefined }[]>([]);
  const [assignmentValue, setAssignmnetValue] = useState("")
  const [completedAssignments, setCompletedAssignments] = useState(0);
  // const [selected, setSelected] = useState<Date | null>(null);

  const handleSubmit = (dueDate?: Date) => {
    // e.preventDefault();
    const newAssignment = {
      id: uuidv4(), 
      text: assignmentValue,
      isChecked: false,
      dueDate : dueDate
    };
    setAssignments([...assignments, newAssignment]);    
    setAssignmnetValue("");
    // setSelected(null);
  }

  return (
    <>
      <Header 
       assignmentValue = {assignmentValue}
       setAssignmnetValue = {setAssignmnetValue}
       handleSubmit = {handleSubmit}
      //  selected = {selected}
      //  setSelected = {setSelected}
      />
      <Assignments 
        assignments = {assignments}
        setAssignments = {setAssignments}
        completedAssignments ={completedAssignments}
        setCompletedAssignments = {setCompletedAssignments}
      />
    </>
  );
}

export default App;
