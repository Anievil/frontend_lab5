import React from "react";
import ExpenseItem from "../ExpenseItem";

import { expenses } from "../../contsans";
import NewExpenseFill from "../NewExpenseFill/NewExpenseFill";
import Filter from "../Filter/Filter";

function ExpenseList() {
  return (
    <div className="card expenses">
      <NewExpenseFill />
      <Filter />
      {expenses.map((expense) => (
        <ExpenseItem item={expense} key={expense.id} />
      ))}
    </div>
  );
}

export default ExpenseList;
