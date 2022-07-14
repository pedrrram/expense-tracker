const Transaction = ({ transaction, onDelete }) => {
  return (
    <div
      className={`flex justify-between px-5 font-light py-3 bg-slate-300/50 rounded-md mb-3 border-l-4 ${
        transaction.type === 'income' ? 'border-emerald-600' : 'border-rose-600'
      }`}
    >
      <span>{transaction.description}</span>
      <div className="flex space-x-3 items-center">
        <span>${transaction.amount}</span>
        <div onClick={() => onDelete(transaction.id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-slate-400 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
