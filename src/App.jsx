
import { useState } from 'react'
import './App.css'

function App() {
  const [text,setText]=useState("")
  const [items,setItems]=useState([])

  function handleAdd(){
    if(text.trim()==="")return ;
    let newItem={
      id:Date.now(),
      text:text,
    }
    setItems([...items,newItem]);
    setText("")
  }
  
  function handleDelete(idToRemove){
    setItems(items.filter(item=>item.id !== idToRemove))
  }
  return (
    <>
    <h1>Trello</h1>
    <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
    <button onClick={handleAdd}>Click me</button>
    <ul>
      {items.map((item)=>(
        <li key={item.id}>{item.text}{"    "}
        <button onClick={()=>handleDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
    </>
  )
}

export default App
