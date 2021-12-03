import { useReducer } from "react";

const internalReducer = ({ count }, { type, payload }) => {
  switch (type) {
    case "increment":
      return {
        count: count + 1,
      };
    case "decrement":
      return {
        count: count - 1,
      };
    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};

const useCounter = ({ initialValue }, reducer = internalReducer) => {
  const [{ count }, dispatch] = useReducer(reducer, { count: initialValue });

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };

  return {
    count,
    handleIncrement,
    handleDecrement,
  };
};

useCounter.reducer = internalReducer;

export default useCounter;
