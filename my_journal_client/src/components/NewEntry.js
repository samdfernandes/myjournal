import React from 'react'
import Form from './Form'

function NewEntry (props) {
    return (
        <div>
            <h2>New Entry</h2>
            <Form handleSubmit={props.handleSubmit} user={props.user}/>
        </div>
    )
}



export default NewEntry