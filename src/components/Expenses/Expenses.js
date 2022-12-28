import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
    const [filteredYear, setFilteredYear]=useState('');
    console.log("Filtered Year", filteredYear)


    const selectedFilteredYear=(selectedOption)=>{
        setFilteredYear(selectedOption);
    }
    return (
        <div>
        
        <Card className="expenses">
        <ExpensesFilter filteredYear={selectedFilteredYear} />
            <ExpenseItem 
            title={props.item[0].title}
            amount={props.item[0].amount}
            date={props.item[0].date} />
            <ExpenseItem 
            title={props.item[1].title}
            amount={props.item[1].amount}
            date={props.item[1].date} />
            <ExpenseItem 
            title={props.item[2].title}
            amount={props.item[2].amount}
            date={props.item[2].date} />
            <ExpenseItem 
            title={props.item[3].title}
            amount={props.item[3].amount}
            date={props.item[3].date} />
        </Card>
        </div>
    )
}
export default Expenses;