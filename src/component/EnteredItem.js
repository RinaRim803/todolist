function EnteredItem(props) {
  return (
    <div>
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
          props.title
        )}
        <button onClick={(e) => props.onClickTodo(e, props.id)}>Update</button>
        <button onClick={(e) => props.deleteTodo(e, props.id)}>Delete</button>
      </li>
    </div>
  );
}

export default EnteredItem;
