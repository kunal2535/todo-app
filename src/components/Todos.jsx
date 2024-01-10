import React from 'react'
import Todo from './Todo'
const Todos = ({todos}) => {
  return (
    <div>
    {
       todos.map((todo)=>{
         return <Todo {...todo}/>
       })
    }


    </div>
  )
}

export default Todos