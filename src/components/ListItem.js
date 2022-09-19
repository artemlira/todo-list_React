import React, { useContext } from "react";
import { Context } from "../Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";



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

      <li className={statusToDoItem()}>
        {
          completed ?
            <FontAwesomeIcon icon={faCircleCheck} className="delete" onClick={() => toggleTodo(id)} />
            :
            <FontAwesomeIcon icon={faCircle} className="delete" onClick={() => toggleTodo(id)} />
        }
        {title}
        <div>
          <FontAwesomeIcon icon={faTrash} className="delete" onClick={() => removeTodo(id)} />
        </div>

      </li>
    </>

  )
}