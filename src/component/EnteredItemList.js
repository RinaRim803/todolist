
import EnteredItem from "./EnteredItem";


function EnteredItemList(prop) {
  return (
    <ul>
      {prop.data.map((todoItem) => {
        return <EnteredItem key={todoItem.id} id={todoItem.id} title={todoItem.title} />;
      })}
    </ul>
  );
}

export default EnteredItemList;
