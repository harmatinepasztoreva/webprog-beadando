function CompButton({ value, onButtonClick }) {
  return (
    <button onClick={onButtonClick}>
      {value}
    </button>
  );
}

export default CompButton;