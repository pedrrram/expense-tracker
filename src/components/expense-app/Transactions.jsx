import propTypes from 'prop-types';
import { useEffect, useState } from 'react';

import Transaction from './Transaction';

const Transactions = ({ transactions, onDelete }) => {
  const [searchItem, setSearchItem] = useState('');
  const [filteredTransactions, setFilteredTransactions] =
    useState(transactions);

  const changeHandler = (e) => {
    setSearchItem(e.target.value);
  };

  const filterTransactions = (searchedItem) => {
    if (!searchedItem && searchedItem !== '') {
      setFilteredTransactions(transactions);
      return;
    }
    setFilteredTransactions(
      transactions.filter((tr) =>
        tr.description.toLowerCase().includes(searchedItem.toLowerCase())
      )
    );
  };

  useEffect(() => {
    filterTransactions(searchItem);
  }, [transactions, searchItem]);

  return (
    <section className="w-4/6">
      <input
        type="text"
        value={searchItem}
        onChange={changeHandler}
        placeholder="Search item..."
        className="bg-slate-200/90 outline-none w-full border-b-2 border-slate-400 px-4 py-2 rounded-md"
      />

      <div className="mt-4 text-slate-900">
        {filteredTransactions?.map((tr) => (
          <Transaction key={tr.id} transaction={tr} onDelete={onDelete}/>
        ))}
      </div>
    </section>
  );
};

Transactions.propTypes = {
  transactions: propTypes.array.isRequired,
};

export default Transactions;
