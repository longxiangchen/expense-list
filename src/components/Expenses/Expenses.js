import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import ExpenseList from "./ExpenseFilter/ExpenseList";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2022");

  function filterChangeHandler(selectedYear) {
    setSelectedYear(selectedYear);
    // console.log(selectedYear);
  }
  const filteredExpenses = props.data.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={selectedYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
