import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newEntry } from '../actions/entriesActions';
import Input from './Input';
import mapStateToProps from './Entries';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
      img: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // this.props.handleSubmit(event, {
    //   title: this.state.title,
    //   text: this.state.text,
    //   img: this.state.img
    // });
    // this.setState({
    //   title: '',
    //   text: '',
    //   img: ''
    // });
    // if (this.props.entry) {
    //   this.props.toggleForm();
    // }
    const post = {
      title: this.state.title,
      text: this.state.text,
      img: this.state.img
    };
  }

  componentWillMount() {
    if (this.props.entry) {
      this.setState({
        title: this.props.entry.title,
        text: this.props.entry.text,
        img: this.props.entry.img,
        id: this.props.entry.id,
        user_id: this.props.user.id
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          handleChange={this.handleChange}
          name={'title'}
          placeholder={
            this.props.entry ? this.props.entry.title : 'Entry Title'
          }
          type={'text'}
          value={this.state.title}
          id={'title'}
        />
        <Input
          handleChange={this.handleChange}
          name={'text'}
          placeholder={
            this.props.entry
              ? this.props.entry.text
              : 'Your journal entry for today'
          }
          type={'textarea'}
          value={this.state.text}
          id={'text'}
        />
        <Input
          handleChange={this.handleChange}
          name={'img'}
          placeholder={
            this.props.entry
              ? this.props.entry.img
                ? this.props.entry.img
                : 'image url'
              : 'image url'
          }
          type={'img'}
          value={this.state.img}
          id={'img'}
        />
        <input
          type='submit'
          value={this.props.entry ? 'update this entry' : 'add an entry'}
        />
      </form>
    );
  }
}

// Form.PropTypes = {
//   newEntry: PropTypes.func.isRequired
// };

export default (mapStateToProps, { newEntry })(Form);
