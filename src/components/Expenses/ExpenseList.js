import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpenseList = (props) => {
  let expenseContent = <p>No Expense Found.</p>;

  if (props.expenses.length === 0) {
    return (
      <h2 className="expenses-list__fallback">No Expenses Found.</h2>
    )
  }

  return props.expenses.map((expense) => {
      return (
        <ul className="expenses-list">
          <ExpenseItem
            key={expense.id}
            amount={expense.amount}
            title={expense.title}
            date={expense.date}
          />
        </ul>
      )
    });
}

export default ExpenseList;