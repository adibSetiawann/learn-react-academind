import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // merubah variabelnya
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(54000);

  const clickHandler = () => {
    setTitle("Update!");
    console.log(title);
  };

  const clickAmount = () => {
    setAmount("Harga baru");
  };
  
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <h2 onClick={clickAmount}>{amount}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
      <button onClick={clickHandler}>Click Me</button>
    </Card>
  );
};

export default ExpenseItem;
