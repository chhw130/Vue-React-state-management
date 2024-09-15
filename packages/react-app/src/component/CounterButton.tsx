interface CounterButtonProps {
  onIncrement: () => void;
}

const CounterButton = ({ onIncrement }: CounterButtonProps) => {
  return (
    <button className="counter-button" onClick={onIncrement}>
      Increment
    </button>
  );
};

export default CounterButton;
