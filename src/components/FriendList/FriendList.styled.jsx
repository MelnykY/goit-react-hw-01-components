import styled from '@emotion/styled';

export const FriendListUl = styled.ul`
  display: flex;
  width: 300px;
  flex-direction: column;
  margin: 0 auto;
  list-style-type: none;
  padding: 0;
  background-color: #bde7ff;
  border: 1px solid black;
  box-shadow: 5px 3px 2px 0px rgba(0, 0, 0, 0.5);
`;
export const FriendItem = styled.li`
  margin: 20px 50px;
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  background-color: #effaff;
`;
export const FriendItemName = styled.p`
  font-weight: 900;
`;
