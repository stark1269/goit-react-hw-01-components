import PropTypes from 'prop-types';
import { Status, Item, Text } from './FriendItem.styled';

export const FriendItem = ({avatar, name, isOnline}) => {
  return (
    <Item>
      <Status online={isOnline}></Status>
      <img src={avatar} alt={name} width="48" />
      <Text online={isOnline}>{name}</Text>
    </Item>
  )
};

FriendItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};