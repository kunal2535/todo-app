import React, { useState } from "react";
import "./App.css";
import Todoform from "./components/Todoform";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn Guitar", completed: true },
    { id: 2, title: "Play Music", completed: false },
    { id: 3, title: "Learn Programming", completed: true },
  ]);

  const addTodo = (newTodo)=>{
    setTodos((prevState)=> [...prevState,newTodo])
 };

const removeTodo = (id)=>{
    setTodos((prevState)=> prevState.filter(todo=> todo.id !== id))
}
 const toggleCompleted = (id)=>{
    setTodos((prevState)=>{
       return prevState.map((todo)=>{
        if(todo.id === id){
           return {...todo, completed: !todo.completed}
        }
        else{
           return todo;
        }
       });
    });
 };
  return (
    <div className="container">
      <h1 className="main-title">Todo List</h1>
      <Todoform addTodo={addTodo} />
      <Todos todos={todos} toggleCompleted={toggleCompleted} removeTodo={removeTodo}/>
    </div>
  );
}
export default App;
