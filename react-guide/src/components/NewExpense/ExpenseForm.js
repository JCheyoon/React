import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = ({ onSaveExpenseData }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [isFormShowing, setIsFormShowing] = useState(false);

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const showExpenseForm = () => {
    setIsFormShowing(true);
  };

  const hideExpenseForm = () => {
    setIsFormShowing(false);
  };
  return (
    <form onSubmit={submitHandler}>
      {isFormShowing === false ? (
        <button onClick={showExpenseForm}>Add New Expense</button>
      ) : null}
      {isFormShowing === true ? (
        <>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                value={enteredTitle}
                onChange={titleChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={enteredAmount}
                onChange={amountChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2021-01-01"
                step="2023-12-31"
                value={enteredDate}
                onChange={dateChangeHandler}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button onClick={hideExpenseForm}>Cancel</button>
            <button type="submit" onClick={hideExpenseForm}>
              Add Expense
            </button>
          </div>
        </>
      ) : null}
    </form>
  );
};
export default ExpenseForm;
