import { useEffect, useState } from 'react';

import Overview from './Overview';
import Transactions from './Transactions';

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions((prevTrans) => [
      ...prevTrans,
      { id: Date.now(), ...transaction },
    ]);
  };

  const deleteTransaction = (id) => {
    setTransactions((prevTrxs) => prevTrxs.filter((tr) => tr.id !== id));
  };

  useEffect(() => {
    let inc = 0;
    let exp = 0;
    transactions.forEach((tr) => {
      tr.type === 'income'
        ? (inc += parseFloat(tr.amount))
        : (exp += parseFloat(tr.amount));
    });
    setIncome(inc);
    setExpense(exp);
  }, [transactions]);

  return (
    <section className="flex flex-col items-center w-full max-w-3xl bg-slate-200 rounded-lg text-slate-800 p-5 mb-3">
      <h1>Expense App</h1>
      <Overview
        income={income}
        expense={expense}
        addTransaction={addTransaction}
      />
      <Transactions transactions={transactions} onDelete={deleteTransaction} />
    </section>
  );
};

export default ExpenseApp;
