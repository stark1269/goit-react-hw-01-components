import { Container } from './App.styled';
import { Profile } from './Profile/Profile';
import user from './Profile/user.json';
import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data.json';

export const App = () => {
  return (
    <Container>
      <Profile user={user} />

      <Statistics title="Upload stats" data={data} />

    </Container>
  );
};
