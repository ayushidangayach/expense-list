import { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const [showExpenseForm, setShowExpenseForm] = useState(true);

  const onNewExpense = expense => {
    const newExpense = {
      ...expense,
      id: Math.random().toString()
    }

    props.onAddNewExpense(newExpense);
  }

  const changeExpenseFormHandler = () => {
    setShowExpenseForm((prevState) => !prevState);
  }

  let newExpenseContent = <button onClick={changeExpenseFormHandler}>Add New Expense</button>
  if (showExpenseForm) {
    newExpenseContent = <ExpenseForm
        onNewExpense={onNewExpense}
        changeExpenseForm={changeExpenseFormHandler}
      ></ExpenseForm>
  }

  return (
    <div className="new-expense">
      {
        newExpenseContent
      }
    </div>
  );
}

export default NewExpense;