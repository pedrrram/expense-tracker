import propTypes from 'prop-types';

const Transactions = ({ transactions }) => {
  return <div>Transactions</div>;
};

Transactions.propTypes = {
  transactions: propTypes.array.isRequired,
};

export default Transactions;
