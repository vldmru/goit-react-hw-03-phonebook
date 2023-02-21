import React, { Component } from 'react';
import { Form, Label, Input, Button } from "./ContactForm.styled";

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

 handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    };
    
handleSubmit = (e) => {
         e.preventDefault();
         this.props.onSubmit(this.state);
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
    <Form onSubmit={this.handleSubmit}>
        <Label htmlFor="contact_name">Name</Label>
        <Input
          type="text"
          name="name"
          value={this.state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
         onChange={this.handleChange}
        />
        <Label htmlFor="contact_number">Number</Label>
        <Input
          value={this.state.number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={this.handleChange}
        />
        <Button type="submit"> Add contact</Button>
      </Form>
    );
  }
}

