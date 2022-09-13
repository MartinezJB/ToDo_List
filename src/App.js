import { useState } from "react";
import './app.css'
import AddToDo from "./components/AddToDo";
import ListContainer from "./components/ListContainer";

function App() {

  const [toDoList, setToDoList] = useState([]);

  const onCompleted = (id) => {

    setToDoList(toDoList.map( e => {
      return e.id === Number(id) ? {...e, completed: !e.completed } : {...e} 
    }))

  }

  const addTodo = (title, description) => {
    setToDoList([...toDoList,
      {
        id: +new Date(),
        title: title,
        description: description,
        completed: false,
      }])
  }


  const onDeleted = (id) => {
    setToDoList([...toDoList].filter(e => e.id !== id))
  }

  return (
    <div className="container">
      <AddToDo toDoList={toDoList} addTodo={addTodo} />
      <ListContainer list={toDoList} onCompleted={onCompleted} onDeleted={onDeleted} />
    </div>
  );
}

export default App;
