import { Container } from './App.styled';
import { Profile } from './Profile/Profile';
import user from './Profile/user.json';

export const App = () => {
  return (
    <Container>
      <Profile user={user} />
    </Container>
  );
};
