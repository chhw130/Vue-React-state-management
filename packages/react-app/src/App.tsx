import { useState } from "react";
import CounterButton from "./component/CounterButton";
import CounterDisplay from "./component/CounterDisplay";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  console.log(
    `%cCurrent Count : ${count}`,
    "background-color: yellow; color: black"
  );

  return (
    <div className="app">
      <h1>Counter</h1>
      <CounterDisplay count={count} />
      <CounterButton onIncrement={handleIncrement} />
    </div>
  );
}

export default App;
