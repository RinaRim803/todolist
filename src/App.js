import style from "./App.module.css";
import { useState } from "react";
import uniqueId from "lodash.uniqueid";
import EnteredItemList from "./component/EnteredItemList";

function App() {
  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState([]);

  const [isChecked, setIsChecked] = useState(false);
  const [editedTodo, setEditedTodo] = useState("");
  const [editable, setEditable] = useState(false);

  function submitValueHandler(e) {
    e.preventDefault();

    const prevUserTodoList = todoList;
    const todoId = uniqueId();

    prevUserTodoList.push({ id: todoId, title: todoItem });
    setTodoList(prevUserTodoList);
    setTodoItem("");
  }

  function checkTodoHandler(e) {
    setIsChecked(() => e.target.checked);
    console.log(isChecked);
  }

  function deleteTodoHandler(event, key) {
    event.preventDefault();
    if (isChecked) {
      const prevUserTodoList = todoList;
      setTodoList(() => {
        return prevUserTodoList.filter((item) => item.id !== key);
      });
    }
  }
  function editTodoHandler(e) {
    e.preventDefault();
    const editedValue = e.target.value;
    const key = e.target.id;
    setEditedTodo(editedValue);

    const prevUserTodoList = todoList;
    prevUserTodoList.map((item) => {
      if (item.id === key) {
        item.title = editedValue;
      }
    });
    setTodoList(prevUserTodoList);
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
        {todoList.map((item) => {
          return (
            <li key={item.id}>
              <input type="checkbox" onChange={checkTodoHandler} />
                {editable ? (
                  <input
                    type="text"
                    id={item.id}
                    value={item.title}
                    onChange={(event) => editTodoHandler(event)}
                  />
                ) : (
                  item.title
                )}
                <button onClick={()=>setEditable(!editable)}>Update</button>
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
