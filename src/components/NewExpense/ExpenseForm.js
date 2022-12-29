import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle,setEnteredTitle]= useState('');
    const [enteredAmount,setEnteredAmount]= useState('');
    const [enteredDate, setEnteredDate]= useState('');

    const titleChangeHandler=(e)=>{
        setEnteredTitle(e.target.value)
    }

    const amountChangeHandler=(e)=>{
        setEnteredAmount(e.target.value)
    }

    const dateChangeHandler=(e)=>{
        setEnteredDate(e.target.value)
    }
    const onSubmitHandler=(e)=>{
        props.cancel(false);
        e.preventDefault();
        const expenseData={
           title: enteredTitle,
           amount: enteredAmount,
           date: new Date(enteredDate),
        }
        props.onSave(expenseData);

        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
    }

    const onCancelHandler=()=>{
        props.cancel(false)
    }
    

    return (
        <form onSubmit={onSubmitHandler}>
            <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input value={enteredTitle} type='text' onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input value={enteredAmount} type='number' onChange={amountChangeHandler} min='0.01' step='0.01' />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input value={enteredDate} type='date' onChange={dateChangeHandler} min='2019-1-1' max='2022-12-31' />
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
                <button onClick={onCancelHandler} >Cancel</button>
            </div>
            </div>
        </form>
    )
}

export default ExpenseForm;