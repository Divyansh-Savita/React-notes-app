 import { useState } from 'react'
import './App.css'

function App() {
  const [task,setTask]=useState([])
  const [newTask,setNewTask]=useState("")

  function addTask(){
    if (newTask.trim() === "") return; 
    setTask(prev=>[...prev,newTask])
    setNewTask("")
  }
  return (
    <>
      <h1>Trello</h1>
      <input type="text" value={newTask} onChange={(e)=>setNewTask(e.target.value)} />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {task.map((val,index)=>
        <li key={index}>{val}</li>
        )}
      </ul>
    </>
  )
}

export default App;
