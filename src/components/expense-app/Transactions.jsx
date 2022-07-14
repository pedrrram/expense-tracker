import propTypes from 'prop-types';

const Transactions = ({ transactions }) => {
  return <div>{transactions?.map(tr => <div key={tr.id}>{tr.type} - {tr.amount}</div>)}</div>;
};

Transactions.propTypes = {
  transactions: propTypes.array.isRequired,
};

export default Transactions;
