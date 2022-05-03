import { useState } from "react";

function KmToMiles() {
  const [value, setValue] = useState(0);
  const [inverted, setInverted] = useState(false);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const reset = () => {
    return setValue(0);
  };
  const onFlip = () => {
    reset();
    setInverted((current) => !current);
  };

  return (
    <>
      <div>
        <label htmlFor="km">Km</label>
        <input
          value={inverted ? value * 1.60934 : value}
          id="km"
          placeholder="Km"
          type="number"
          onChange={onChange}
          disabled={inverted === true}
        />
        <h4>You want to convert {value}</h4>
      </div>
      <div>
        <label htmlFor="miles">Mi</label>
        <input
          value={inverted ? value : value / 1.60934}
          id="miles"
          placeholder="Mi"
          type="number"
          disabled={inverted === false}
          onChange={onChange}
        />
      </div>
      <button onClick={reset}>Rest</button>
      <button onClick={onFlip}>{inverted ? "Turn back" : "Invert"}</button>
    </>
  );
}

export default KmToMiles;
