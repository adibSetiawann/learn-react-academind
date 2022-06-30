import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/nexExpenses/NewExpense";
import './app.css';

function App() {
  const expense = [
    {
      id: "e1",
      title: "Tissue",
      amount: 54.12,
      date: new Date(2020, 1, 2),
    },
    {
      id: "e2",
      title: "Car Steer",
      amount: 123.12,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Air Mancur",
      amount: 101.2,
      date: new Date(2022, 3, 21),
    },
    {
      id: "e4",
      title: "Bathub",
      amount: 154.61,
      date: new Date(2022, 3, 24),
    }
  ];

  const AddExpense = expense => {
    console.log('in app.js');
    console.log(expense);
  }
  return (
    <div className="App">
      <NewExpense onAddExpense={AddExpense}/>
      <Expenses items={expense} />
    </div>
  );
}

export default App;
