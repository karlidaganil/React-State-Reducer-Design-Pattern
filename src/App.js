import "./App.css";
import Counter from "./Counter";
import useCounter from "./useCounter";

const App = () => {
  const counterReducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return {
          count: state.count + 5,
        };
      default:
        return useCounter.reducer(state, action);
    }
  };

  const { count, handleIncrement, handleDecrement } = useCounter(
    {
      initialValue: 5,
    },
    counterReducer
  );
  return (
    <div className="center">
      <Counter>
        <Counter.Increment text="+" onClick={handleIncrement} />
        <Counter.Label>Counter</Counter.Label>
        <Counter.Count count={count} />
        <Counter.Decrement text="-" onClick={handleDecrement} />
      </Counter>
    </div>
  );
};

export default App;
