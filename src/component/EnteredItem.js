import style from "./EnteredItem.module.css";
function EnteredItem(props) {
  return (
    <li key={props.id} className={style.todoItem}>
      <div className={style.content}>
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
      </div>
      <div className={style.editButton}>
        <button onClick={(e) => props.onClickTodo(e, props.id)}>
          {props.editable ? "Enter" : "Update"}
        </button>
        <button onClick={(e) => props.deleteTodo(props.id)}>Delete</button>
      </div>
    </li>
  );
}

export default EnteredItem;
