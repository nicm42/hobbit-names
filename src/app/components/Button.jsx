function Button({ value, text, setGenderToShow }) {
  return (
    <button value={value} onClick={() => setGenderToShow(value)}>
      {text}
    </button>
  );
}

export default Button;
