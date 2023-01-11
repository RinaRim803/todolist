import style from "./App.module.css";
import { useState } from "react";
import uniqueId from "lodash.uniqueid";
import { connect } from "react-redux";

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
  function updateTodoHandler(newItem) {
    setTodoList(newItem);
  }

  return (
    <div className={style.main}>
      <span className={style.logo}>My Todolist</span>
      <form onSubmit={submitValueHandler} className={style.addTodo}>
        <div id="newTodo">
          <input
            type="text"
            value={todoItem}
            onChange={(e) => setTodoItem(e.target.value)}
          />
        </div>
          <button className={style.btn}>Add</button>

      </form>
      <div className={style.todo}>
        {todoList.length ? (
          <EnteredItemList data={todoList} updateTodo={updateTodoHandler} />
        ) : (
          <span>Add todo list</span>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    math: state.math,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch({
        type: "SET_NAME",
        payload: name,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
