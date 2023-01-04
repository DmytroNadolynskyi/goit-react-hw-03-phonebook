import { Component } from 'react';
import { nanoid } from 'nanoid';

import { Conteiner, Message } from './App.styled';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onFormSubmit = info => {
    const isContactRepeat = this.state.contacts.find(
      el => el.name.toLowerCase() === info.name.toLowerCase()
    );
    if (isContactRepeat) {
      alert('Already in Contacts');
      return;
    }
    const contact = {
      ...info,
      id: nanoid(),
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  onInputChange = filter => {
    this.setState({
      filter,
    });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevState) {

    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }


  render() {
    const filterContacts = this.filterContacts();
    return (
      <Conteiner>
        <h1>Phonebook</h1>
        <ContactForm onFormSubmit={this.onFormSubmit} />
        {this.state.contacts.length > 0 ? (
          <>
            <h2>Contacts</h2>
            <Filter onInputChange={this.onInputChange} />
            <ContactList
              filterContacts={filterContacts}
              deleteContact={this.deleteContact}
            />
          </>
        ) : (
          <Message>Contacts list is empty yet</Message>
        )}
      </Conteiner>
    );
  }
}
