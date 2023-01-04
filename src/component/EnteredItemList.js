import { useState } from "react";
import style from "./EnteredItemList.module.css";
import EnteredItem from "./EnteredItem";

function EnteredItemList(prop) {
  const [todoList, setTodoList] = useState(prop.data);
  
  function deleteTodoHandler(key) {
    const prevUserTodoList = [...todoList];
    const newtodos = prevUserTodoList.filter((item) => item.id !== key);
    setTodoList(()=>newtodos)
    prop.updateTodo(newtodos)
  }
  function editTodoHandler(e, id) {
    const prevUserTodoList = [...todoList];
    const todo = prevUserTodoList.find((item) => item.id === id);
    todo.title = e.target.value;
    setTodoList(prevUserTodoList);
  }
  function editableHandler(e, id) {
    const newTodos = [...todoList];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.editable = !todo.editable;
    setTodoList(newTodos);
  }

  return (
    <ul>
      {prop.data.map((todoItem) => {
        return (
          <EnteredItem
            key={todoItem.id}
            id={todoItem.id}
            title={todoItem.title}
            editable={todoItem.editable}
            onClickTodo={editableHandler}
            deleteTodo={deleteTodoHandler}
            editTodo={editTodoHandler}
          />
        );
      })}
    </ul>
  );
}

export default EnteredItemList;
