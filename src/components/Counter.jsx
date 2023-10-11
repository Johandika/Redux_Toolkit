import { useSelector, useDispatch } from "react-redux";
import { addByAmount, decrement, increment } from "../store/slices/counterSlice";

function Counter() {
  const { counter } = useSelector((state) => state.counterSlice);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter Component</h2>
      <h2>Counter : {counter}</h2>
      <button onClick={() => dispatch(increment())}> Tambah</button>
      <button onClick={() => dispatch(decrement())}> Kurang</button>
      <button onClick={() => dispatch(addByAmount(5))}> add5</button>
    </div>
  );
}

export default Counter;
