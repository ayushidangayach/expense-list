import { useState } from 'react';

import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import ExpenseList from './ExpenseList';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';

const Expense = (props) => {

  const [expenseFilter, setExpenseFilter] = useState('2021');
  let expenses = [
    ...props.expenses
  ];

  const changeExpenseFilterValue = (filterValue) => {
    setExpenseFilter(filterValue);
  }

  expenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === expenseFilter;
  });
  
  return (
    <Card className="expenses">
      <ExpenseFilter
        expenseFilter={expenseFilter}
        setExpenseFilter={changeExpenseFilterValue}
      />
      <ExpensesChart
        expenses={expenses}
      />
      <ExpenseList
      expenses={expenses}
      />
    </Card>
  )
}

export default Expense;