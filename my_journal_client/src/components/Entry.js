import React from 'react'
import Form from './Form.js'

class Entry extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      formVisible: false
    }
    this.toggleForm = this.toggleForm.bind(this)
  }
  
  toggleForm(){
    this.setState({
      formVisible: !this.state.formVisible
    })
  }


  render () {
    const {entry, handleDelete, handleUpdate} = this.props
      return (
        <div> 
         { this.state.formVisible
          ? 
          <div>
              <h3>{ entry.title }</h3>
              <small>{ entry.created_at }</small>
              <img src={entry.img}/>
              <p>{ entry.text }</p>
              <Form
                  entry={entry}
                  handleSubmit={handleUpdate}
                  toggleForm={this.toggleForm}
                  />
              
          </div>
          : <div>
              <h3>{ entry.title }</h3>
              <small>{ entry.created_at }</small>
              <img src={entry.img}/>
              <p>{ entry.text }</p>
              
              
              <button onClick={()=> handleDelete(entry)}>X</button>
              <button onClick={this.toggleForm}>Edit</button>
            </div>
         }
         </div>
      )
  }
}

export default Entry
