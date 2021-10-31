import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <div className={s.tableContainer}>
      <h2 className={s.title}>Transaction history</h2>
      <table className={s.table}>
        <thead className={s.tableHead}>
          <tr>
            <th className={s.tableTitle}>Type</th>
            <th className={s.tableTitle}>Amount</th>
            <th className={s.tableTitle}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td className={s.tableItem}>{item.type}</td>
              <td className={s.tableItem}>{item.amount}</td>
              <td className={s.tableItem}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;
