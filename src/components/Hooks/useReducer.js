import React, { useReducer } from "react";
import "./style.css";

const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    state = state + 1;
  }

  if (state > 0 && action.type === "DECREMENT") {
    state = state - 1;
  }
  return state;
};

const UseReducer = () => {
  // const initialData = 15;
  //   const [myNum, setMyNum] = React.useState(0);
  const intialData = 10;
  const [state, dispatch] = useReducer(reducer, intialData);

  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        <div class="button2" onClick={() => dispatch({ type: "INCREMENT" })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCREMENT
        </div>
        <div class="button2" onClick={() => dispatch({ type: "DECREMENT" })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECREMENT
        </div>
      </div>
    </>
  );
};

export default UseReducer;
