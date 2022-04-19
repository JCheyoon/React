import Expenses from "./components/Expenses/Expenses";
import "./App.css";
import React from "react";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "learning"),
    React.createElement(Expenses, { item: expenses })
  );
  // return (
  //   <div>
  //     <h2>learning</h2>
  //     <Expenses item={expenses} />
  //   </div>
  // );
}
// 여기서 expense itme -> item은 Expense.js 의 props.item
export default App;
