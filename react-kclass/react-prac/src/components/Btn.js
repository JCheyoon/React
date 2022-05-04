function Btn({ text, changeValue }) {
  return (
    <button
      onClick={changeValue}
      style={{
        backgroundColor: "tomato",
        color: "white",
        padding: "10px 2px",
        border: 0,
        borderRadius: 10,
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
}

export default Btn;
