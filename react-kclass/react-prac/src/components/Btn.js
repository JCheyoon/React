import styles from "./Btn.module.css";
function Btn({ text, changeValue }) {
  return (
    <button onClick={changeValue} className={styles.Btn}>
      {text}
    </button>
  );
}

export default Btn;
