import React from "react";

const Counter = ({ children }) => {
  return <h1>{children}</h1>;
};

const Label = ({ children }) => {
  return <h5>{children}</h5>;
};

const Count = ({ count }) => {
  return <h5>{count}</h5>;
};

const Increment = ({ text, onClick, ...props }) => {
  return (
    <button onClick={onClick} {...props}>
      {text}
    </button>
  );
};

const Decrement = ({ text, onClick, ...props }) => {
  return (
    <button onClick={onClick} {...props}>
      {text}
    </button>
  );
};

Counter.Label = Label;
Counter.Count = Count;
Counter.Increment = Increment;
Counter.Decrement = Decrement;

export default Counter;
