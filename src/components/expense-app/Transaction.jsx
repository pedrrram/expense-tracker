const Transaction = ({ transaction }) => {
  return (
    <div
      className={`flex justify-between px-5 font-light py-3 bg-slate-300/50 rounded-md mb-3 border-l-4 ${
        transaction.type === 'income' ? 'border-emerald-600' : 'border-rose-600'
      }`}
    >
      <span>{transaction.description}</span>
      <span>${transaction.amount}</span>
    </div>
  );
};

export default Transaction;
