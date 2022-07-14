import { useState } from 'react';

const Form = ({ setIsShow, addTransaction }) => {
  const [transaction, setTransaction] = useState({
    type: 'income',
    amount: 0,
    description: '',
  });

  const changeHandler = (e) => {
    setTransaction((prevTrans) => ({
      ...prevTrans,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (transaction.amount > 0 && transaction.description !== '') {
      addTransaction(transaction);
      setIsShow(false);
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="bg-slate-300 w-4/6 rounded-lg text-slate-900 flex flex-col items-center p-5 font-thin space-y-3"
    >
      <input
        name="amount"
        type="number"
        placeholder="Amount"
        min={0}
        className="w-3/4 bg-slate-200/90 outline-none px-4 py-2 rounded-md"
        onChange={changeHandler}
      />
      <input
        name="description"
        type="text"
        placeholder="Description"
        className="w-3/4 bg-slate-200/90 outline-none px-4 py-2 rounded-md"
        value={transaction.description}
        onChange={changeHandler}
      />
      <div className="text-lg flex w-3/4 justify-start items-center space-x-4">
        <div>
          <input
            type="radio"
            id="income"
            name="type"
            className="mr-2"
            value="income"
            checked={transaction.type === 'income'}
            onChange={changeHandler}
          />
          <label htmlFor="income">Income</label>
        </div>
        <div>
          <input
            type="radio"
            id="expense"
            name="type"
            value="expense"
            checked={transaction.type === 'expense'}
            className="mr-2"
            onChange={changeHandler}
          />
          <label htmlFor="expense">Expense</label>
        </div>
      </div>
      <button className="text-white font-thin bg-slate-900 rounded-lg px-5 py-2 mt-2">
        Add Transaction
      </button>
    </form>
  );
};

export default Form;
