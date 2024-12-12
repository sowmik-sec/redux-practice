import React from "react";
import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  // Calculate the number of boxes to display
  const numberOfBoxes = Math.floor(count / 5);

  return (
    <div>
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <div className="flex border-purple-300 rounded-md bg-slate-50 p-10">
          <button
            onClick={() => dispatch(increment())}
            className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(incrementByValue(5))}
            className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white"
          >
            Increment by 5
          </button>
          <h1 className="text-3xl mx-10">{count}</h1>
          <button
            onClick={() => dispatch(decrement())}
            className="px-3 py-2 rounded-md bg-red-500 text-xl font-semibold text-white"
          >
            Decrement
          </button>
        </div>
        {/* Render the boxes dynamically */}
        <div className="mt-10 flex flex-wrap gap-2">
          {Array.from({ length: numberOfBoxes }, (_, index) => (
            <div key={index} className="w-10 h-10 bg-blue-500 rounded-md"></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
