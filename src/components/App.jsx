import { Component } from 'react';
import { ContactForm } from './phonebookForm/PhonebookForn';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout.styled';


export class App extends Component {
  state = {
  contacts: [],
  name: ''
}

  render() {
  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm />
      Lets Go 
      <GlobalStyle />
    </Layout>
  );}
};
