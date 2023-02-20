import PropTypes from 'prop-types';
import { FriendItem, FriendItemName } from '../FriendList/FriendList.styled';
import { Status } from './FriendListItem.styled';

export function FriendListItem({ avatar, name, isOnline }) {
  return (
    <FriendItem>
      <Status statusType={isOnline}>{isOnline}</Status>
      <img className="avatar" src={avatar} alt={name} width="70" />
      <FriendItemName>{name}</FriendItemName>
    </FriendItem>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
