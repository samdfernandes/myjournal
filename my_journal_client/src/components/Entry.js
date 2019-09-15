import React, { Component } from 'react';
// import Form from './Form.js'

class Entry extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     formVisible: false
  //   }
  //   this.toggleForm = this.toggleForm.bind(this)
  // }

  // toggleForm(){
  //   this.setState({
  //     formVisible: !this.state.formVisible
  //   })
  // }

  render() {
    // const {entry, handleDelete, handleUpdate} = this.props
    return (
      <div>
        <h3>{this.props.post.title}</h3>
        <img alt='no alt' src={this.props.post.image} />
        <p>{this.props.post.text}</p>
      </div>
    );
  }
}

export default Entry;
