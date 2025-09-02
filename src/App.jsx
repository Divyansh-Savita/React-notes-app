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
  function deleteTask(index){
    setTask(task.filter((_,i)=> i!=index));
  }
  return (
    <>
      <h1>Trello</h1>
      <input type="text" value={newTask} onChange={(e)=>setNewTask(e.target.value)} />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {task.map((val,index)=>
        <li key={index}>{val}
        <button onClick={()=>deleteTask(index)}>Delete</button>
        </li>
        )}
        
      </ul>
    </>
  )
}

export default App;
