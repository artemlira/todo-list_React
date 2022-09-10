import React from "react";
import ListItem from "./ListItem";



export default function List({ todos }) {
   // const ListData = 

   return (
      <div className='todoList'>
         <ul className='todo__items'>
            {todos.map(item => <ListItem key={item.id} {...item} />)}
         </ul>
      </div>
   )
}