import style from "./App.module.css";
import { useState } from "react";
import uniqueId from "lodash.uniqueid";
import EnteredItemList from "./component/EnteredItemList";
import { Card } from "@mui/material";
import { connect } from "react-redux";

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
    <div className={style.container}>
      <div className={style.form}>
        <h1>Today Todolist</h1>
        <form onSubmit={submitValueHandler}>
          <input
            type="text"
            value={todoItem}
            onChange={(e) => setTodoItem(e.target.value)}
          />
          <button className={style.btn}>Add</button>
        </form>
      </div>
      <Card>
        <div className={style.columns}>
          {todoList.length ? (
            <EnteredItemList data={todoList} updateTodo={updateTodoHandler} />
          ) : (
            <span>Add todo list</span>
          )}
        </div>
      </Card>
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
