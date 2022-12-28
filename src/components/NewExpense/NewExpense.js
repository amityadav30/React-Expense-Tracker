import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
const NewExpense=(props)=>{
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
            <ExpenseForm onSave={onSaveHandler}/>
        </div>
        
    )
}

export default NewExpense;