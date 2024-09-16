import { useState } from "react";
import CounterButton from "./component/CounterButton";
import CounterDisplay from "./component/CounterDisplay";

function App() {
  // 렌더 단계
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  console.log(
    `%cCurrent Count : ${count}`,
    "background-color: yellow; color: black"
  );
  // 여기 까지
  return (
    <div className="app">
      <h1>Counter</h1>
      <CounterDisplay count={count} />
      <CounterButton onIncrement={handleIncrement} />
    </div>
  );
}

export default App;
