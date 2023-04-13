import PropTypes from 'prop-types';
import { Table, Head, Th, Tr, Td } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
  <Head>
    <tr>
      <Th>Type</Th>
      <Th>Amount</Th>
      <Th>Currency</Th>
    </tr>
      </Head>

  <tbody>

    {items.map(item => {
    return (
    <Tr key={item.id}>
    <Td>{item.type}</Td>
    <Td>{item.amount}</Td>
    <Td>{item.currency}</Td>
    </Tr>
    )
    })}

  </tbody>
</Table>
  )
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};