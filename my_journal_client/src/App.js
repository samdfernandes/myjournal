import React, { Component } from 'react';
import { Provider } from 'react-redux';
import LandingPage from './components/LandingPage';
import Form from './components/Form';
import Entries from './components/Entries';
import { createStore } from 'redux';
import postReducer from './reducers/postReducer';
import axios from 'axios';

const store = createStore(postReducer);

class App extends Component {
  // this.handleDelete = this.handleDelete.bind(this);
  // this.handleUpdate = this.handleUpdate.bind(this);
  // }

  async handleAdd(event, formInputs) {
    event.preventDefault();
    await axios.post('http://localhost:3000/users/1/entries', formInputs);
    this.setState({
      formInputs: {
        user_id: '',
        title: '',
        text: '',
        img: ''
      }
    });
    this.getData();
  }

  async handleDelete(deletedEntry) {
    await axios.delete(
      `http://localhost:3000/users/1/entries/${deletedEntry.id}`
    );
    this.getData();
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.formInputs);
  }

  async handleUpdate(event, formInputs) {
    event.preventDefault();
    await axios.put(
      `http://localhost:3000/users/1/entries/${formInputs.id}`,
      formInputs
    );
    this.getData();
  }

  render() {
    return (
      <Provider store={store}>
        <LandingPage />
        <Form />
        <hr />
        <Entries />
      </Provider>
    );
  }
}

export default App;
