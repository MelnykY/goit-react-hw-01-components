import PropTypes from 'prop-types';
import {
  TransactionHistoryTable,
  TransactionHistoryThead,
  TransactionHistoryTr,
  TransactionHistoryTd,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryTable>
      <TransactionHistoryThead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TransactionHistoryThead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TransactionHistoryTr key={id}>
              <TransactionHistoryTd>{type}</TransactionHistoryTd>
              <TransactionHistoryTd>{amount}</TransactionHistoryTd>
              <TransactionHistoryTd>{currency}</TransactionHistoryTd>
            </TransactionHistoryTr>
          );
        })}
      </tbody>
    </TransactionHistoryTable>
  );
};

TransactionHistory.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
};