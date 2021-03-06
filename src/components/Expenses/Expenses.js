import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');
  const changeFilterHandler = selectedyear => {
    setFilteredYear(selectedyear);
    // console.log('on expenses.js')
    // console.log(selectedyear)
  }
  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeClick={changeFilterHandler}/>
        <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
        <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
        <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
        <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} />
      </Card>
    </div>
  );
}

export default Expenses;
