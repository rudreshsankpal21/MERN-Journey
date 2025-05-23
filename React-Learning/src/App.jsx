import React, { useState, useContext, createContext } from "react";

const MyContext = createContext();

const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  //  Function to increment counter
  const increment = () => setCount(count + 1);
  //  Function to decrement counter
  const decrement = () => setCount(count - 1);

  return (
    <MyContext.Provider value={{ count, increment, decrement }}>
      {children}
    </MyContext.Provider>
  );
};

const context = () => {
  const useContextApi = useContext(MyContext);
  return useContextApi;
};

const Counter = () => {
  const { count, increment, decrement } = context();

  return (
    <div>
      <h1>Count : {count} </h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
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
