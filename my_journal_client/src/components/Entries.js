import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getEntries, newEntry } from '../actions/entriesActions';

import Entry from './Entry';

class Entries extends Component {
  componentWillMount() {
    this.props.getEntries();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.createEntry) {
      this.props.entries.push(nextProps.createEntry);
    }
  }

  render() {
    // const { handleDelete, handleUpdate } = props;
    const entries = this.props.entries.map(entry => (
      <div key={entry.id}>
        <h3>{entry.title}</h3>
        <p>{entry.text}</p>
        {/* handleDelete={handleDelete}
    handleUpdate={handleUpdate}*/}
      </div>
    ));
    return <div>{entries}</div>;
  }
}

// Entries.PropTypes = {
//   getEntries: PropTypes.func.isRequired,
//   entries: PropTypes.array.isRequired
// };

const mapStateToProps = state => ({
  entries: state.entries.items,
  createEntry: state.entries.item
});

export default connect(
  mapStateToProps,
  { getEntries }
)(Entries);
