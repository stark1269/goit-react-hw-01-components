import PropTypes from 'prop-types';
import { Container, Wrap, Image, Name, Info, List, Item } from './Profile.styled';

export const Profile = ({ user: { username, tag, location, avatar, stats } }) => { 
  return (
    <Container>

      <Wrap>
        <Image
          src={avatar}
          alt={username}
        />
        <Name>{username}</Name>
        <Info>@{tag}</Info>
        <Info>{location}</Info>
      </Wrap>

      <List>
        <Item>
          <Info>Followers </Info>
          <Name>{stats.followers}</Name>
        </Item>
        <Item>
          <Info>Views </Info>
          <Name>{stats.views}</Name>
        </Item>
        <Item>
          <Info>Likes </Info>
          <Name>{stats.likes}</Name>
        </Item>
      </List>

    </Container>);
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }).isRequired,
};
