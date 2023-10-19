import React, { useState } from 'react'

export default function AddTodo({addTodo}) {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    let submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert('Either title or description is empty!');
        }else{
            addTodo(title,desc);
            setTitle('');
            setDesc('');
        }
    }
  return (
        <> 
        <div className='container'>
            <h3>Add a Todo</h3>
        <form onSubmit={submit}>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1">Title</label>
            <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="col-4 form-control" id="exampleInputEmail1"/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1">Description</label>
            <input type="text" className="col-6 form-control" value={desc} onChange={(e)=>{setDesc(e.target.value)}} id="exampleInputPassword1"/>
        </div>
           <button type="submit" className="btn btn-sm btn-round btn-success">Submit</button>
        </form>
        </div>
        </>
    )
}
