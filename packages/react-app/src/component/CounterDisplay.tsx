interface CounterDisplayProps {
  count: number;
}

const CounterDisplay = ({ count }: CounterDisplayProps) => {
  return <h3 className="counter-display">Count: {count}</h3>;
};

export default CounterDisplay;
