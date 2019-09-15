import React, { Component } from 'react'
import { connect } from 'react-redux'

class PostForm extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        const data = {
            id: new Date(),
            title,
            message,
            editing: false
        }
        this.props.dispatch({
            type: 'ADD_POST',
            data
        })
        this.getTitle.value = '';
        this.getMessage.value = '';
    }

    render(){
        return(
            <div className='post-container'>
                <h1 className='post_heading'>Create Post</h1>
                <form className='form' onSubmit={this.handleSubmit}>
                <input required type="text" ref={(input) => this.getTitle = input} placeholder="Your Post Title" /><br/><br />
                <textarea required rows="25" cols="150" ref={(input) => this.getMessage = input} placeholder="Write your post entry here" /><br/><br/>
                <button>Post</button>
                </form>
            </div>
        )
    }
}

export default connect()(PostForm)