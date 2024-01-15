import React from 'react'

const Todo = ({id,completed,title,toggleCompleted,removeTodo}) => {
  return (
    <div style={{
      border: '2px solid #242424',
      padding: '1rem',
      margin: '1rem'
    }}>
      <p>id: {id}</p>
      <p>{title}</p>
      <input type="checkbox" checked={completed} onChange={()=>toggleCompleted(id)}/>
      <p>Completed: {completed ? 'true' : 'false'}</p>
      <button onClick={()=>removeTodo(id)}>Remove</button>
    </div>
  )
}

export default Todo