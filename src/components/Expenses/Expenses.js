import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import { useState } from "react";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2021');

    const result = props.item.filter(i => i.date.getFullYear() == filteredYear)
    


    const filterChangeHandler = (selectedOption) => {
        setFilteredYear(selectedOption);
    }
    return (
        <div>

            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} filteredYear={filterChangeHandler} />
                {/* {filteredYear && result.map((expense) => {
                    return (
                        <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
                    )
                })} */}


                <ExpensesList item={result}/>

            </Card>
        </div>
    )
}
export default Expenses;