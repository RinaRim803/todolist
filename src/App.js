import style from "./App.module.css";
import { useState } from "react";
import uniqueId from "lodash.uniqueid";
import EnteredItem from "./component/EnteredItem";

function App() {
  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState([]);

  function submitValueHandler(e) {
    e.preventDefault();

    const prevUserTodoList = todoList;
    const todoId = uniqueId();

    prevUserTodoList.push({ id: todoId, title: todoItem, editable: false });
    setTodoList(prevUserTodoList);
    setTodoItem("");
  }

  function deleteTodoHandler(event, key) {
    const prevUserTodoList = todoList;
    setTodoList(() => {
      return prevUserTodoList.filter((item) => item.id !== key);
    });
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
    <div className={style.general}>
      <div className={style.form}>
        <form onSubmit={submitValueHandler}>
          <input
            type="text"
            value={todoItem}
            onChange={(e) => setTodoItem(e.target.value)}
          />
        </form>
      </div>

      <div className={style}>
        {todoList.length ? (
          <ul>
            {todoList.map((todoItem) => {
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
        ) : (
          "add todo lists"
        )}
      </div>
    </div>
  );
}

export default App;
