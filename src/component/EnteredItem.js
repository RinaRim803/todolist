import React from "react";

function EnteredItem(props) {
  function deleteTodoHandler() {
    return;
  }
  return (
    <div>
      <li key={props.id} onClick={deleteTodoHandler}>
        {props.title}
      </li>
    </div>
  );
}

export default EnteredItem;
