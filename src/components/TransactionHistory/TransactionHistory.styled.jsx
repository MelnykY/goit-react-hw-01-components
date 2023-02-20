import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  table-layout: auto;
  border: 1px solid black;
  box-shadow: 5px 3px 2px 0px rgba(0, 0, 0, 0.5);
  width: 400px;
  margin: 60px auto;
  padding: 5px;
  background-color: EFFAFF;
`;
export const TransactionHistoryThead = styled.thead`
  background-color: #bde7ff;
`;
export const TransactionHistoryTr = styled.tr`
  :nth-of-type(even) {
    background-color: #effaff;
  }
`;
export const TransactionHistoryTd = styled.td`
  border: 1px solid grey;
`;
