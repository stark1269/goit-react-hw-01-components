import { Container } from './App.styled';
import { Profile } from './Profile/Profile';
import user from './Profile/user.json';
import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from './FriendList/friends.json';

export const App = () => {
  return (
    <Container>
      <Profile user={user} />

      <Statistics title="Upload stats" data={data} />

      <FriendList friends={friends} />

    </Container>
  );
};
