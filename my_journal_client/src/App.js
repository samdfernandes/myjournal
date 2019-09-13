import React, { Component } from 'react';
import Navigation from './components/Navigation';
import LandingPage from './components/LandingPage';
import NewEntry from './components/NewEntry'
import MyJournal from './components/MyJournal'
// 

import axios from 'axios'
// import SignIn from './components/SignIn'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      entries: [],
      formInputs: {
        user_id: '',
        title: '',
        text: '',
        img: ''
      }
    }
    this.handleAdd = this.handleAdd.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  async getData() {
    const response = await axios.get('http://localhost:3000/users/1')
    const data = response.data
    this.setState({
      user: data,
      entries: data.entries
    })

    console.log(this.state.user);
  }

  componentDidMount(){
    this.getData()
  }

  async handleAdd(event, formInputs) {
    event.preventDefault()
    await axios.post('http://localhost:3000/users/1/entries', formInputs)
    this.setState({
      formInputs:{
        user_id: '',
        title: '',
        text: '',
        img: ''
      }
    })
    this.getData()
  }

  async handleDelete(deletedEntry) {
    await axios.delete(`http://localhost:3000/users/1/entries/${deletedEntry.id}`)
    this.getData()
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(this.state.formInputs)
  }

  async handleUpdate (event, formInputs) {
    event.preventDefault()
    await axios.put(`http://localhost:3000/users/1/entries/${formInputs.id}`, formInputs)
    this.getData()
  }

  render () {
    return (
      <div className="App">
        <div className="container">
          <Navigation />

          <LandingPage />
          
          <NewEntry 
          handleSubmit={this.handleAdd} 
          user={this.state.user}/>

          <MyJournal 
          entries={this.state.entries}
          handleDelete={this.handleDelete}
          handleUpdate={this.handleUpdate}/>

        </div>
      </div>
    );
  }

}

export default App;
