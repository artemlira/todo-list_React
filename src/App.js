import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from './components/Form';
import List from './components/List';
import { Context } from './Context';
import Header from './components/Header';
import { useAuth } from './components/useAuth';



import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

const firebaseConfig = {
   apiKey: "AIzaSyBVH9RF-GNx9aOZr6bxDOoNUwDkiLCL_6M",
   authDomain: "my-todo-a5bd2.firebaseapp.com",
   databaseURL: "https://my-todo-a5bd2-default-rtdb.europe-west1.firebasedatabase.app",
   projectId: "my-todo-a5bd2",
   storageBucket: "my-todo-a5bd2.appspot.com",
   messagingSenderId: "696975526836",
   appId: "1:696975526836:web:bb2af56227809da96280e1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);




function App() {
   const [todos, setTodos] = useState([]);

   const auth = useAuth(firebase.auth);
   console.dir(auth);

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

            <Header {...auth} />

            <Form todos={todos} setTodos={setTodos} />

            <List todos={todos} />
         </div>
      </Context.Provider>
   );
}

export default App;
