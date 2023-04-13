import PropTypes from 'prop-types';
import { FriendItem } from './FriendItem';
import { List } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (

<List>
  {friends.map(friend => {
    return (
      <FriendItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
  )
})}
</List>
)
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
  ).isRequired,
};