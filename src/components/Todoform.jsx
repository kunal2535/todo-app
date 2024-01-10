import React from 'react'

const Todoform = () => {

  function handleSubmit(e){
     e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
       <input type="text" />
       <button type="submit">Add</button>
    </form>
  )
}

export default Todoform