import style from "./App.module.css";
import { useState } from "react";
import uniqueId from "lodash.uniqueid";
import EnteredItemList from "./component/EnteredItemList";

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

  return (
    <div className={style.general}>
      <h1>Today Todolist</h1>
      <div className={style.form}>
        <form onSubmit={submitValueHandler}>
          <input
            type="text"
            value={todoItem}
            onChange={(e) => setTodoItem(e.target.value)}
          />
        </form>
      </div>

      <div className={style.columns}>
        {todoList.length ? (
          <EnteredItemList data={todoList} />
        ) : (
          <span>Add todo list</span>
        )}
      </div>
    </div>
  );
}

export default App;
