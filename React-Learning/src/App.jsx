import React, { useReducer } from "react";

const initialState = { count: 1 };

const reducer = (state, action) => {
  if (action.type == "MULBY2") {
    return {
      ...state,
      count: state.count * 2,
    };
  } else if (action.type == "MULBY3") {
    return {
      ...state,
      count: state.count * 3,
    };
  } else if (action.type == "MULBY4") {
    return {
      ...state,
      count: state.count * 4,
    };
  } else if (action.type == "MULBY5") {
    return {
      ...state,
      count: state.count * 5,
    };
  } else if (action.type == "MULBY6") {
    return {
      ...state,
      count: state.count * 6,
    };
  } else {
    return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>
        <h1> {state.count} </h1>
        <button onClick={() => dispatch({ type: "MULBY2" })}>Mult by 2</button>
        <button onClick={() => dispatch({ type: "MULBY3" })}>Mult by 3</button>
        <button onClick={() => dispatch({ type: "MULBY4" })}>Mult by 4</button>
        <button onClick={() => dispatch({ type: "MULBY5" })}>Mult by 5</button>
        <button onClick={() => dispatch({ type: "MULBY6" })}>Mult by 6</button>
      </div>
    </>
  );
};

const App = () => {
  return (
    <>
      <Counter />
    </>
  );
};

export default App;
