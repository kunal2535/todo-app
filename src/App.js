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
  return (
    <>
      <h1 className="main-title">Todo List</h1>
      <Todoform />
      <Todos todos={todos}/>
    </>
  );
}
export default App;
