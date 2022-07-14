import { useState } from 'react';

// Components
import Form from './form/Form';
import ResultBox from './ResultBox';

const Overview = ({ income, expense, addTransaction }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <div className="w-full flex justify-evenly items-center my-3">
        <span className="font-bold text-slate-900 text-2xl md:w-1/4">
          Balance: {income && expense ? income - expense : null}
        </span>
        <div className="md:w-1/4 text-right">
          <button
            className={`text-white font-thin bg-slate-900 rounded-lg px-5 py-2 ${
              isShow
                ? 'bg-transparent text-slate-900 border border-slate-900'
                : ''
            }`}
            onClick={() => setIsShow(!isShow)}
          >
            {isShow ? 'Cancel' : 'Add'}
          </button>
        </div>
      </div>
      {isShow && <Form setIsShow={setIsShow} addTransaction={addTransaction} />}
      <div className="w-full flex justify-evenly items-center my-3">
        <ResultBox kind={'Income'} amount={income} />
        <ResultBox kind={'Expense'} amount={expense} />
      </div>
    </>
  );
};

export default Overview;
