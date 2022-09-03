import React from "react";

export default function ListItem({ id, title, completed }) {

   const statusToDoItem = () => {
      if (completed) {
         return 'todo__completed'
      } else {
         return 'todo__item'
      }
   }
   return (
      <li className={statusToDoItem()}>{title}</li>
   )
}