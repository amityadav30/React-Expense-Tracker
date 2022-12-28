import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';
import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import {useState} from "react";


function App() {



  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12) 
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const onSaveHandler=(enteredData)=>{
    console.log("In APP.js");
    console.log(enteredData);
  }


  


  return (
    <div>
      <NewExpense onSaveNewExp={onSaveHandler}/>
      
      <Expenses item={expenses} />

      {/* {expenses.map(item=>(

        <ExpenseItem
        key={item.title} 
        title={item.title} 
        amount={item.amount} 
        date={item.date}
        />
      )
      )
} */}
    </div>
  );
}

export default App;
