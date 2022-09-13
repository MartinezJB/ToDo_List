import React, { useState } from 'react'

export default function AddToDo({ toDoList, addTodo }) {

  const [toDoTitle, setToDoTitle] = useState("");
  const [toDoDesc, setToDoDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(toDoTitle.trim() !== "") {
      addTodo(toDoTitle, toDoDesc);
      setToDoTitle("");
      setToDoDesc("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={toDoTitle} onChange={(e)=>setToDoTitle(e.currentTarget.value)} placeholder="Title" id="title" />
      <input type="text" value={toDoDesc} onChange={(e)=>setToDoDesc(e.currentTarget.value)} placeholder="Description" id="desc" />
      <button>add todo</button>
    </form>
  )
}
