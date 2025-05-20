import useCounterStore from './store';

const Counter = () => {
  // #region Zustand State Management
  const { counter, increment, reset } = useCounterStore();
  // #endregion

  return (
    <div>
      Counter ({counter})
      <button onClick={increment} className="btn btn-primary mx-1">
        Increment
      </button>
      <button onClick={reset} className="btn btn-primary mx-1">
        Reset
      </button>
    </div>
  );
};

export default Counter;
