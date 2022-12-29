import Chart from "../Chart/Chart"
const ExpenseChart = (props) => {

    const monthvalue = props.expense.map(item => {
        const newD = new Date(item.date)
        return ({month:newD.getMonth(),amount:item.amount})
    })
    console.log("Month", monthvalue)

    const monthlyExpense = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 }
    ]

    for(const exp of monthvalue){
        monthlyExpense[exp.month].value+=exp.amount
    }
    return(
        <Chart expense={monthlyExpense}/>
    )



}

export default ExpenseChart;