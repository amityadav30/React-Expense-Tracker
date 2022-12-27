import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css'

function Expenses(props) {
    return (

        <Card className="expenses">
            <ExpenseItem item={props.item} />
        </Card>
    )
}
export default Expenses;