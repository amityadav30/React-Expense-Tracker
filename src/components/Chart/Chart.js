import './Chart.css';
import ChartBar from './ChartBar';
const Chart = (props) => {
    const dataPointValues = props.expense.map(item => item.value);
    const maxVal = Math.max(...dataPointValues)
    return (
        <div className='chart'>
            {
                props.expense.map(item => {
                    return (<ChartBar
                        label={item.label}
                        value={item.value}
                        maxValue={maxVal}
                        key={item.label} />)
                })
            }
        </div>
    )

}
export default Chart;