import React, { useState, useContext, createContext } from "react";

const MyContext = createContext();

const CountProvider = ({ children }) => {
  const [count, setCount] = useState(1);
  // Function to multiply by 2
  const mulBy2 = () => setCount(count * 2);
  // Function to multiply by 3
  const mulBy3 = () => setCount(count * 3);
  // Function to multiply by 4
  const mulBy4 = () => setCount(count * 4);
  // Function to multiply by 5
  const mulBy5 = () => setCount(count * 5);
  // Function to multiply by 6
  const mulBy6 = () => setCount(count * 6);

  return (
    <MyContext.Provider
      value={{ count, mulBy2, mulBy3, mulBy4, mulBy5, mulBy6 }}
    >
      {children}
    </MyContext.Provider>
  );
};

const context = () => {
  const useCount = useContext(MyContext);
  return useCount;
};

const HandleCounter = () => {
  const { count, mulBy2, mulBy3, mulBy4, mulBy5, mulBy6 } = context();

  return (
    <div>
      <h1>Count : {count} </h1>
      <button onClick={mulBy2}>Mult by 2</button>
      <button onClick={mulBy3}>Mult by 3</button>
      <button onClick={mulBy4}>Mult by 4</button>
      <button onClick={mulBy5}>Mult by 5</button>
      <button onClick={mulBy6}>Mult by 6</button>
    </div>
  );
};

const App = () => {
  return (
    <>
      <CountProvider>
        <HandleCounter />
      </CountProvider>
    </>
  );
};

export default App;
