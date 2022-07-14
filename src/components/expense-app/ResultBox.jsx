import propTypes from 'prop-types';

const ResultBox = ({ kind, amount }) => {

  return (
    <div className="border border-slate-300 rounded-lg flex flex-col p-4 md:w-1/4">
      <span className="font-thin text-xl mb-1">{kind}</span>
      <span
        className={`font-bold ${
          kind === 'Income' ? 'text-emerald-600' : 'text-rose-600'
        } text-lg`}
      >
        ${amount}
      </span>
    </div>
  );
};

ResultBox.propTypes = {
  kind: propTypes.string.isRequired,
  amount: propTypes.number.isRequired
}

export default ResultBox;
