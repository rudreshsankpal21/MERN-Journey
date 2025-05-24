import React, { useReducer, createContext, useContext } from "react";

const initialState = {
  count: 1,
};

// creating reducer
const reducer = (state, action) => {
  if (action.type === "MULBY2") {
    return {
      ...state,
      count: state.count * 2,
    };
  } else if (action.type === "MULBY3") {
    return {
      ...state,
      count: state.count * 3,
    };
  } else if (action.type === "MULBY4") {
    return {
      ...state,
      count: state.count * 4,
    };
  } else if (action.type === "MULBY5") {
    return {
      ...state,
      count: state.count * 5,
    };
  } else {
    return state;
  }
};

// creating context
const CountContext = createContext();

// creating provider
const CountProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider value={{ state, dispatch }}>
      {children}
    </CountContext.Provider>
  );
};

const Counter = () => {
  const { state, dispatch } = useContext(CountContext);
  return (
    <>
      <div>
        <h1>Counter</h1>
        <h1>{state.count}</h1>
        <button
          onClick={() => dispatch({ type: "MULBY2" })}
          className="border-2 p-3 m-4 bg-black text-white font-bold"
        >
          Multiply by 2
        </button>
        <button
          onClick={() => dispatch({ type: "MULBY3" })}
          className="border-2 p-3 m-4 bg-black text-white font-bold"
        >
          Multiply by 3
        </button>
        <button
          onClick={() => dispatch({ type: "MULBY4" })}
          className="border-2 p-3 m-4 bg-black text-white font-bold"
        >
          Multiply by 4
        </button>
        <button
          onClick={() => dispatch({ type: "MULBY5" })}
          className="border-2 p-3 m-4 bg-black text-white font-bold"
        >
          Multiply by 5
        </button>
      </div>
    </>
  );
};

const App = () => {
  return (
    <>
      <CountProvider>
        <Counter />
      </CountProvider>
    </>
  );
};

export default App;
