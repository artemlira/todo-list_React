import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from './components/Form';
import List from './components/List';

function App() {
   const [todos, setTodos] = useState([
      { id: 1, title: 'Завдання 1', comleted: true }
   ]);

   // useEffect(() => {
   //    const row = localStorage.getItem('todos');
   //    console.log(row);
   //    setTodos(JSON.parse(row));
   // }, []);

   // useEffect(() => {

   //    localStorage.setItem('todos', JSON.stringify(todos));
   // }, [todos]);

   return (
      <div className='todo'>
         <h2>Список завдань</h2>
         <Form todos={todos} setTodos={setTodos} />
         <List todos={todos} />
      </div>
   );
}

export default App;
