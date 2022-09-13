import React from 'react'

export default function ToDoCard({ toDo, onCompleted, onDeleted }) {

  const sectionStyle = () => {
    return {
      textDecoration: toDo.completed ? 'line-through' : 'none'
    }
  }
  
  return (
    <div className="todo-card">
        <button onClick={() => onDeleted(toDo.id)}>X</button>
        <section style={sectionStyle()} id={toDo.id}>
          
          <a href={'#' + toDo.id}>{toDo.title}</a>
          <p>{toDo.description}</p>
        </section>
        <input type="checkbox" checked={toDo.completed} onChange={() => onCompleted(toDo.id)} />
    </div>
  )
}
