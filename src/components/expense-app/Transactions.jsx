import propTypes from 'prop-types';

import Transaction from './Transaction';

const Transactions = ({ transactions }) => {
  return (
    <div className='w-4/6 mt-4 text-slate-900'>
      {transactions?.map((tr) => (
        <Transaction transaction={tr}/>
      ))}
    </div>
  );
};

Transactions.propTypes = {
  transactions: propTypes.array.isRequired,
};

export default Transactions;
