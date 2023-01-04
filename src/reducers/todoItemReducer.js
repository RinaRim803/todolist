

const todoItemReducer = (state = { id: 0, title: "todoItem", editable: false }, action) => {
    switch (action.type) {
      case "ADD":
        state = {
          ...state,
          result: state.result + action.payload,
          lastValues: [...state.lastValues, action.payload],
        };
        break;
      case "SUBTRACT":
        state = {
          ...state,
          result: state.result - action.payload,
          lastValues: [...state.lastValues, action.payload],
        };
        break;
    }
    return state;
  };
  
  export default MathReducer;
  