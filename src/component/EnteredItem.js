import React, { useState } from "react";

function EnteredItem(props) {
  const [todoItem, setTodoItem] = useState("");

  const [isChecked, setIsChecked] = useState(false);
  const [editedTodo, setEditedTodo] = useState("");

  function checkTodoHandler(e) {
    setIsChecked(e.target.checked);
  }

  function editTodoHandler(editedValue, key) {
    console.log(editedValue, key);
    setEditedTodo(editedValue);
    console.log(editedTodo);
  }

  function deleteTodoHandler(event, key) {}

  return (
    <div>
      <li key={props.id}>
        <input type="checkbox" onChange={checkTodoHandler} />
        <input
          type="text"
          id={props.id}
          value={props.title}
          onChange={(event) =>
            editTodoHandler(event.target.value, event.target.id)
          }
        />
        <button>Edit</button>
        <button onClick={(event) => deleteTodoHandler(event, props.id)}>
          Delete
        </button>
      </li>
    </div>
  );
}

export default EnteredItem;
