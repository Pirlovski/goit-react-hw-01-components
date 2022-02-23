import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

import TransactionHistoryItem from './TransactionHistoryItem';
export default function TransactionHistory({ items }) {
  return (
    <div>
      <table className={s.table}>
        <thead className={s.tableHead}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        {items.map(({ id, type, amount, currency }) => (
          <tbody key={id} className={s.tbody}>
            {' '}
            <TransactionHistoryItem
              type={type}
              amount={amount}
              currency={currency}
            />
          </tbody>
        ))}
      </table>
    </div>
  );
}

TransactionHistoryItem.propTypes = {
  id: PropTypes.string,
};
