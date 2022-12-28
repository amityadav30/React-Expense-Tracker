import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
    return (
        <div>
        
        <Card className="expenses">
            <ExpenseItem item={props.item} />
        </Card>
        </div>
    )
}
export default Expenses;