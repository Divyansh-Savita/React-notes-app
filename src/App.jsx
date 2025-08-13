
import { useState } from 'react'
import './App.css'

function App() {
  const [text,setText]=useState("")
  const [items,setItems]=useState([])
  function handleAdd(){
    if(text.trim()==="")return ;
    setItems([...items,text]);
    setText("")
  }
  
  return (
    <>
    <h1>React Notes App</h1>
    <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
    <button onClick={handleAdd}>Click me</button>
    <ul>
      {items.map((item,index)=>(
        <li key={index}>{item}</li>
      ))}
    </ul>
    </>
  )
}

export default App
