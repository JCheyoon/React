import { useState } from "react";

function MinutesToHours() {
  const [amount, setAmount] = useState(0);
  const [inverted, setInverted] = useState(false);
  const onChange = (e) => {
    setAmount(e.target.value);
  };
  const reset = () => {
    return setAmount(0);
  };
  const onFlip = () => {
    reset();
    setInverted((current) => !current);
  };

  return (
    <>
      <div>
        <label htmlFor="minutes">Minutes</label>
        <input
          value={inverted ? amount * 60 : amount}
          id="minutes"
          placeholder="Minutes"
          type="number"
          onChange={onChange}
          disabled={inverted === true}
        />
        <h4>You want to convert {amount}</h4>
      </div>
      <div>
        <label htmlFor="hours">Hours</label>
        <input
          value={inverted ? amount : Math.round(amount / 60)}
          id="hours"
          placeholder="Hours"
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

export default MinutesToHours;
