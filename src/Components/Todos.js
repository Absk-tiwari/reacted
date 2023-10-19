import React from 'react';
import TodoItem from "./Todo";

export default function Todos(props) {

  return (
    <div className='container'>
        <h3 className='py-3'>Todos List</h3>
        {props.todos.length===0? <p>No Todos To display</p> :
            props.todos.map((todo)=>{
                return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
            })
        }
    </div>    
  )
}
