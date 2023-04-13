import PropTypes from 'prop-types';
import { Statistic } from './Statistic';
import { Container, List, Item, Title } from './Statistics.styled';

export const Statistics = ({ title, data }) => {
  return (

    <Container>

      {title && <Title>{title}</Title>}

<List>
    {data.map((item) => {
    return (
      <Item key={item.id}>
        <Statistic item={item} />
      </Item>
    )
  })}
</List>

    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};