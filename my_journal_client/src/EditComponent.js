import React, { Component } from 'react'
import { connect } from 'react-redux'

class EditComponent extends Component {
    handleEdit = (event) => {
        event.preventDefault();
        const newTitle = this.getTitle.value;
        const newMessage = this.getMessage.value;
        const data = {
            newTitle,
            newMessage
        }
        this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data:data })
    }

    render(){
        return (
            <div key={this.props.post.id} className='post'>
                <form onSubmit={this.handleEdit} className='form'>
                    <input required type="text" ref={(input) => this.getTitle = input} defaultValue={this.props.post.title} placeholder="Your Post Title" /><br/><br />
                    <textarea required rows="25" cols="150" ref={(input) => this.getMessage = input} defaultValue={this.props.post.message} placeholder="Write your post entry here" /><br/><br/>
                    <button>Update</button>
                </form>
            </div>

        )
    }
}

export default connect()(EditComponent)