// import React from "react";
import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

// import { format } from 'date-fns';
// import { DayPicker } from 'react-day-picker';

function App() {
  const [assignments, setAssignments] = useState<{ id: string, text: string, isChecked: boolean }[]>([]);
  const [assignmentValue, setAssignmnetValue] = useState("")
  const [completedAssignments, setCompletedAssignments] = useState(0);
  // const [selected, setSelected] = React.useState<Date>();

  // let footer = <p>Please pick a day.</p>;
  // if (selected) {
  //   footer = <p>You picked {format(selected, 'PP')}.</p>;
  // }
  
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newAssignment = {
      id: uuidv4(), 
      text: assignmentValue,
      isChecked: false,
    };
    setAssignments([...assignments, newAssignment]);    
    setAssignmnetValue("");
  }

  return (
    <>
      <Header 
       assignmentValue = {assignmentValue}
       setAssignmnetValue = {setAssignmnetValue}
       handleSubmit = {handleSubmit}
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
