import React from 'react'

export default function Todo({todo,onDelete}) {
  return (
    <div>
        <div className="col">
            <b>{todo.title}</b> 
            <p>{todo.desc}</p>
            <button className='btn btn-sm btn-danger mb-5' onClick={()=> {onDelete(todo)}}>Delete</button>
        </div>
    </div>
  )
}
