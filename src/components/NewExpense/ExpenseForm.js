import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  }

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  }

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const expense = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    }
    
    changeExpenseForm();
    props.onNewExpense(expense);
  }

  const changeExpenseForm = () => {
    setEnteredTitle('');
    setEnteredDate('');
    setEnteredAmount('');

    props.changeExpenseForm();
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2021-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button
          type="button"
          onClick={changeExpenseForm}
          className="muted"
        >
          Cancel
        </button>
        <button
          type="submit"
        >Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;