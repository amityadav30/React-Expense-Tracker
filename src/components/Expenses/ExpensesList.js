import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {

   console.log("IN ExpenseList",props.item)
    if (props.item.length === 0) {
        return(<p className="expenses-list__fallback ">Nothing to show</p>);
    }

    return(
        <ul>

       { props.item.map((expense) => {
            return (
                <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
            )
        })}

        </ul>
    )

 

}

export default ExpensesList;