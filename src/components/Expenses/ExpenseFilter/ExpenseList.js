import React from "react";
import ExpenseItem from "../ExpenseItem";

function ExpenseList(props) {
  return (
    <div>
      {props.filteredExpenses.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        props.filteredExpenses.map((expense, index) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
    </div>
  );
}

export default ExpenseList;
