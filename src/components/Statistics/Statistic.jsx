import PropTypes from 'prop-types';
import {Info} from './Statistic.styled';

export const Statistic = ({ item: { label, percentage } }) => {
  return (
    <>
      <Info>{label}</Info>
      <Info>{percentage}%</Info>
    </>
  )
};

Statistic.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};