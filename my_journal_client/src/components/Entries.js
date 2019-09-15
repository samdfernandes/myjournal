import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import { getEntries, newEntry } from '../actions/entriesActions';

// import Entry from './Entry';

class Entries extends Component {
  // componentWillMount() {
  //   this.props.getEntries();
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.newEntry) {
  //     this.props.entries.push(nextProps.newEntry);
  //   }
  // }

  render() {
    // const { handleDelete, handleUpdate } = props;
    {
      /* handleDelete={handleDelete}
    handleUpdate={handleUpdate}*/
    }
    return (
      <div>
        <h2>All Posts</h2>
        {this.props.posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

// Entries.PropTypes = {
//   getEntries: PropTypes.func.isRequired,
//   entries: PropTypes.array.isRequired
// };

const mapStateToProps = state => {
  return {
    // entries: state,
    posts: state
  };
};

export default connect(
  mapStateToProps
  // { getEntries }
)(Entries);
