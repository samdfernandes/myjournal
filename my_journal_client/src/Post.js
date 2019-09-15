import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePost } from './Reducers/actions'


class Post extends Component {
    render() {
        return (
            <div className='post'>
                <h2 className='post_title'>{this.props.post.title}</h2>
                <p className='post_message'>{this.props.post.text}</p>
                <div className='control-buttons'>
                    <button className='edit'
                     onClick={() => this.props.dispatch({type:'EDIT_POST', id:this.props.post.id})}>
                     Edit</button>
                    <button className='delete'
                     onClick={() => this.props.dispatch(() => deletePost(this.props.post.id))}>
                     Delete</button>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}

// const mapDispatchToProps = ({ deletePost /*, startEditing */})

export default connect(mapStateToProps)(Post)