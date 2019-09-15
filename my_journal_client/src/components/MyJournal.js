import React from 'react';
import Entries from './Entries';

function MyJournal(props) {
  const { user, entries, handleDelete, handleUpdate } = props;

  return (
    <Entries
    //   entries={entries}
    //   handleDelete={handleDelete}
    //   handleUpdate={handleUpdate}
    />
  );
}

export default MyJournal;
