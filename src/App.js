import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from './components/Form';
import List from './components/List';
import { Context } from './Context';



function App() {
   const [todos, setTodos] = useState([]);

   const handlerClick = () => console.log('click');

   useEffect(() => {
      const data = JSON.parse(localStorage.getItem('todos')) || [];
      setTodos(data);
   }, []);

   useEffect(() => {
      document.addEventListener('click', handlerClick);
      if (todos.length > 0) {
         localStorage.setItem('todos', JSON.stringify(todos));
      }

      return () => {
         document.removeEventListener('click', handlerClick);
      }

   }, [todos]);

   const toggleTodo = id => {
      setTodos(todos.map(todo => {
         if (todo.id === id) {
            todo.completed = !todo.completed
         }
         return todo;
      }))
   }

   const removeTodo = id => {
      setTodos(todos.filter(todo => {
         return todo.id !== id;
      }))
   }


   return (
      <Context.Provider value={{ toggleTodo, removeTodo }}>
         <div className='todo'>
            <h2>Список завдань</h2>

            <Form todos={todos} setTodos={setTodos} />

            <List todos={todos} />
         </div>
      </Context.Provider>
   );
}

export default App;
