import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import {useState} from "react";

const NewExpense=(props)=>{
    const[addExpense, setAddExpense]=useState(false)

    const cancelHandler=(value)=>{
        setAddExpense(value)
    }

    const addHandler=()=>{
        setAddExpense(true);
    }

    const onSaveHandler=(enteredData)=>{
        const expenseData={
            ...enteredData,
            id: Math.random().toString()
        }
        console.log("In NEWEXpense");
        console.log(expenseData);
        props.onSaveNewExp(expenseData)

    }
    return(
        <div className='new-expense'>
           {!addExpense && <button onClick={addHandler}>Add New Expense</button>}
            {addExpense  && <ExpenseForm cancel={cancelHandler} onSave={onSaveHandler}/>}
        </div>
        
    )
}

export default NewExpense;