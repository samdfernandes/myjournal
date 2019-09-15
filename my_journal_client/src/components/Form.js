import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { newEntry } from '../actions/entriesActions';
// import mapStateToProps from './Entries';

class Form extends Component {
  //   handleChange(event) {
  //     this.setState({
  //       [event.target.id]: event.target.value
  //     });
  //   }

  handleSubmit(event) {
    event.preventDefault();
    const title = this.getTitle.value;
    const text = this.getText.value;
    const image = this.getImage.value;
    const data = {
      title,
      text,
      image
    };
    this.props.dispatch({
      type: 'ADD_POST',
      data
    });
    (this.getTitle.value = ''),
      (this.getText.value = ''),
      (this.getImage.value = '');
    // const post = {
    //   title: this.state.title,
    //   text: this.state.text,
    //   img: this.state.img
    // };
  }

  //   componentWillMount() {
  //     if (this.props.entry) {
  //       this.setState({
  //         title: this.props.entry.title,
  //         text: this.props.entry.text,
  //         img: this.props.entry.img,
  //         id: this.props.entry.id,
  //         user_id: this.props.user.id
  //       });
  //     }
  //   }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          required
          type='text'
          ref={input => (this.getTitle = input)}
          placeholder='title'
        />
        <br />
        <textarea
          required
          rows='5'
          cols='28'
          ref={input => (this.getText = input)}
          placeholder='Type your entry here'
        />
        <br />
        <input
          required
          type='text'
          ref={input => (this.getImage = input)}
          placeholder='image url'
        />
        <br />
        <button>Post</button>
      </form>
    );
  }
}

// Form.PropTypes = {
//   newEntry: PropTypes.func.isRequired
// };

const mapStateToProps = state => {
  return {
    posts: state
  };
};

export default connect()(Form);
