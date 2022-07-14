import { useState } from 'react';

import Overview from './Overview';
import Transactions from './Transactions'

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transactions, setTransactions] = useState([]);

  return (
    <section className="flex flex-col items-center w-full max-w-3xl bg-slate-200 rounded-lg text-slate-800 p-5">
      <h1>Expense App</h1>
      <Overview income={income} expense={expense}/>
      <Transactions transactions={transactions}/>
    </section>
  );
};

export default ExpenseApp;
