// import logo from './logo.svg';
import './App.css';
import Header from "./Components/header";
import Footer from "./Components/footer";
import Todos from "./Components/Todos";
import React, {useEffect, useState} from "react";
import AddTodo from './Components/AddTodo';

function App() {
  
  let local = (localStorage.getItem('todos')==undefined)? []: JSON.parse(localStorage.getItem('todos'));
   
  const addTodo=(title,desc)=>{
      console.log(`I am adding these todo's ${title}, ${desc}`);
      let ind = todos.length + 1 ; 
      let being_added = {
        sno : ind,
        title: title,
        desc : desc
      }
      setTodos([...todos, being_added]);
      localStorage.setItem('todos', JSON.stringify(todos));

  }
  
  const [todos, setTodos] = useState(local);
  
  const onDelete = (todo) =>{
    
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem('todos', JSON.stringify(todos));

  }
 
  
   useEffect(() => { 
    fetch("/api", {mode:'no-cors'} )
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
    }).catch(err=>console.log(err));
  },[]);
  
  return (
     <>
      <Header search={true}/>
      <AddTodo addTodo={addTodo} /> 
      <Todos todos={todos} onDelete={onDelete}></Todos>
      <Footer/>
     </>
  );
}

export default App;
