import { counterActions } from "../store/counterSlice";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter.counter);

  const show = useSelector((state) => state.counter.showCounter);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseByFiveHandler = () => {
    dispatch(counterActions.increaseByFive(5));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler} className={classes.button}>
          Increment
        </button>
        <button onClick={increaseByFiveHandler} className={classes.button}>
          Increase by 5
        </button>
        <button onClick={decrementHandler} className={classes.button}>
          Decrement
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
