import React from 'react'
import Entry from'./Entry'

function Entries(props) {
  const { entries, handleDelete, handleUpdate } = props
    return (
      <div>
        {entries.map(entry => <Entry key={entry.id} entry={entry}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
          />)}
      </div>
    )
}

export default Entries
