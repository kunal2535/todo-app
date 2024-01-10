import React from 'react'

const Todo = ({id,completed,title}) => {
  return (
    <div>
      <p>{id}</p>
      <p>{title}</p>
      <p>Status: {completed ? 'COMPLETED' : 'INCOMPLETE'}</p>
    </div>
  )
}

export default Todo