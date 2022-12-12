import style from "./App.module.css";
import { useState } from "react";
import uniqueId from "lodash.uniqueid";

function App() {
  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState([]);

  const [isChecked, setIsChecked] = useState(false);

  function submitValueHandler(e) {
    e.preventDefault();

    const prevUserTodoList = todoList;
    const todoId = uniqueId();

    prevUserTodoList.push({ id: todoId, title: todoItem });
    setTodoList(prevUserTodoList);
    setTodoItem("");
  }

  function checkTodoHandler(e) {
    setIsChecked(e.target.checked);
    console.log(e.target.checked)
    console.log(isChecked)
  }

  function deleteTodoHandler(event, key) {

    if (isChecked) {
      const prevUserTodoList = todoList;
      console.log("before", prevUserTodoList, "key", key);
      prevUserTodoList.filter((item) => item.id !== key);
      console.log("after", prevUserTodoList);
      setTodoList(prevUserTodoList);
      console.log(todoList);
    }
  }
  function editTodoHandler(event, key) {
    if (isChecked) {
      // Edit
    }
  }

  return (
    <div className={style.general}>
      <div className={style}>
        <form onSubmit={submitValueHandler}>
          <input
            type="text"
            value={todoItem}
            onChange={(e) => setTodoItem(e.target.value)}
          />
        </form>
      </div>

      <div className={style}>
        {todoList.map((item) => {
          return (
            <li key={item.id}>
              <input type="checkbox" checked={isChecked} onChange={checkTodoHandler} />
              <span>{item.title}</span>
              <button onClick={(event) => editTodoHandler(event, item.id)}>
                Edit
              </button>
              <button onClick={(event) => deleteTodoHandler(event, item.id)}>
                Delete
              </button>
            </li>
          );
        })}
        {/* {todoList.length ? <EnteredItemList data={todoList} /> :"add todo lists"} */}
      </div>
    </div>
  );
}

export default App;
