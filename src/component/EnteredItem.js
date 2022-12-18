import style from "./EnteredItem.module.css";
function EnteredItem(props) {
  return (
    <div className={style.nested_div}>
      <li key={props.id}>
        <input type="checkbox" />
        {props.editable ? (
          <input
            type="text"
            id={props.id}
            value={props.title}
            onChange={(e) => props.editTodo(e, props.id)}
          />
        ) : (
          <span>{props.title}</span>
        )}
        <button
          className={style.btn}
          onClick={(e) => props.onClickTodo(e, props.id)}
        >
          {props.editable ? "Enter" : "Update"}
        </button>
        <button
          className={style.btn}
          onClick={(e) => props.deleteTodo(props.id)}
        >
          Delete
        </button>
      </li>
    </div>
  );
}

export default EnteredItem;
