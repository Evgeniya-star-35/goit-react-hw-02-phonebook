import { Component } from 'react';
import Container from './components/Container';
import Form from './components/Form';
import Filter from './components/Filter';
import ContactList from './components/ContactsList';
import initialContacts from './contacts.json';
import s from './App.module.css';

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };
  formSubmitHandler = data => {
    this.state.contacts.forEach(element => {
      if (element.name.toLowerCase() === data.name.toLowerCase()) {
        data.name = 'repeat';
        return alert('contact is already in the directory');
      }
    });
    if (data.name === 'repeat') {
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [data, ...contacts],
    }));
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  getVisibleContact = () => {
    const { filter, contacts } = this.state;
    const contactFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(contactFilter),
    );
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  render() {
    const { filter } = this.state;
    const { formSubmitHandler, changeFilter, deleteContact } = this;
    const visibleContacts = this.getVisibleContact();
    return (
      <Container>
        <h1 className={s.title}>Phonebook</h1>
        <Form onSubmit={formSubmitHandler} />
        <Filter value={filter} onChange={changeFilter} />
        <h2 className={s.contactTitle}>Contacts</h2>
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      </Container>
    );
  }
}

export default App;
