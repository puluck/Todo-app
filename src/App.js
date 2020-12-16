import React, {useState} from 'react';
import './App.css';
import {Form} from './components/Form';
import {TodoList} from './components/TodoList';

function App() {
  
  const [inputText, setInputText]=useState('');
  const [todos,setTodos]=useState([]);
  const [status,setStatus]=useState('all');

  return (
    <div className="App">
     <header>
       <h1>Puluck's To Do List</h1>
     </header>
    <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos}
          setStatus={setStatus}
    />  
    <TodoList todos={todos} setTodos={setTodos} status={status}/>
    </div>
  );
}

export default App;
