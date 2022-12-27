import PropTypes from 'prop-types';
import { List, Button, Item } from './ContactList.styled';

export const ContactList = ({ filterContacts, deleteContact }) => {
  return (
    <List>
      {filterContacts.map(({ name, number, id }) => (
        <Item key={id}>
          <div>
            {name}:{number}
          </div>
          <Button type="button" onClick={() => deleteContact(id)}>
            delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
ContactList.propTypes = {
  filterContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
