

export function addTodoItem(item){
    return{
        type: "ADD_TODOITEM",
        payload: item,
      }
}

export function editTodoItem(item){
    return{
        type: "EDIT_TODOITEM",
        payload: item,
      }
}

export function deleteTodoItem(item){
    return{
        type: "DELETE_TODOITEM",
        payload: item,
      }
}