import {Component} from "react";
import { nanoid } from "nanoid";
import { Container, Section, TitleH1, TitleH2  } from "./App.styled";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

const CONTACTS_KEY = "contacts";

export class App extends Component {
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',

}

  componentDidMount() {
    const localData = localStorage.getItem(CONTACTS_KEY)
    console.log(localData)
    if (localData) {
      this.setState({contacts: JSON.parse(localData)})
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts!== this.state.contacts) {
      localStorage.setItem(CONTACTS_KEY, JSON.stringify(this.state.contacts))
    }
  }
  
  addContact = ({ name, number }) => {
        
        const findName = this.state.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
        if (findName) {
            return alert(`${name} is already in contacts.`);
        }

    this.setState(prevState => {
          return {contacts: [...prevState.contacts,{ name: name, number: number, id: nanoid() }, ],}
            
        });
  };
  
  deleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter((contact) => contact.id !== id)
      }
      
    });
  };

changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };


  
  render() {
    
    return (
      <Container>
        <Section>
          <TitleH1>Phonebook</TitleH1>
          <ContactForm
            onSubmit={this.addContact} />
        
          <TitleH2>Contacts</TitleH2>
          <Filter
            value={this.state.filter}
            onChange={this.changeFilter}
          />
        <ContactList
          contacts={this.filterContacts()}
          onDeleteContact={this.deleteContact} />
</Section>
      </Container>
    )
  }
}