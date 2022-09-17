import React, { useState } from "react";

export default function Form({ todos, setTodos, authentification, login, firebaseDatabase }) {
  const [todoTitle, setTodoTitle] = useState('');

  const dataBase = firebaseDatabase();

  const sendData = (title, copleted) => {
    dataBase.ref('todos').push().set({
      // ref создает шапку в базе данных
      // push создает уникальный ключ, для каждой новой записи в БД
      // set записывает данные в виде объекта в БД

      nameUser: authentification.displayName,
      email: authentification.email,
      title: title,
      copleted: copleted
    })
  };

  const addTodo = (e) => {
    if (e.key === 'Enter' && todoTitle !== '' && todoTitle !== ' ') {
      if (authentification) {

        setTodos([
          ...todos,
          {
            id: Date.now(),
            title: todoTitle,
            completed: false
          }

        ]);
        setTodoTitle('');
        sendData(todoTitle, false);
      } else {
        login();
      }
    }
  }
  return (
    <div className='form'>
      <input type="text"
        placeholder='Введіть завдання'
        value={todoTitle}
        onChange={e => setTodoTitle(e.target.value)}
        onKeyPress={addTodo} />
    </div>
  )
}