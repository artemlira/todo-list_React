import React, { useContext } from "react";
import { Context } from "../Context";



export default function ListItem({ id, title, completed }) {
   const { toggleTodo } = useContext(Context);
   const { removeTodo } = useContext(Context);

   const statusToDoItem = () => {
      if (completed) {
         return 'todo__item todo__completed'
      } else {
         return 'todo__item'
      }
   }
   return (
      <>

         <li className={statusToDoItem()}

         > {title}
            <div>
               <span className="delete" onClick={() => toggleTodo(id)}>complete</span>
               <span className="delete" onClick={() => removeTodo(id)}> delete</span>
            </div>

         </li>
      </>

   )
}