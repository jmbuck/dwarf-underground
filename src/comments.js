import React, { Component } from 'react'
import './comments.css'

class Comments extends Component {
    constructor() {
        super()
        this.state = {
            comments: [],
        }  
    }

    componentDidMount() {
        //load
        const comments = JSON.parse(localStorage.getItem('comments'));
        if(comments != null) {
            this.setState({ comments });
        }
    }

    renderComment(comment, i) {
         return (
            <li key={i}>
                <div className='timestamp'><strong>{comment.timestamp}</strong></div>
                <div className='comment'>{comment.comment}</div>
             </li>
            )
    }

    handleSubmit(ev) {
        ev.preventDefault();
        if(this.commentInput.value !== '') {
            const date = (new Date()).toString();
            const timestamp = date.replace(date.substr(date.indexOf(':')+3), '');
            const comments = [...this.state.comments]
            comments.unshift({comment: this.commentInput.value, timestamp});
            //update state and save to localStorage
            this.setState({ comments }, () => localStorage.setItem('comments', JSON.stringify(this.state.comments)))    
            document.querySelector('.comment-box').focus();
            ev.currentTarget.reset();
        }
    }
    
    render() {
        return (
            <div className="comments">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <textarea 
                        name="commentBox" 
                        placeholder="Leave your comment here!"
                        className="comment-box"
                        ref={input => this.commentInput = input} 
                    ></textarea>
                    <button className="expanded button" type="submit">Post your comment</button>
                </form>
                <ul className="comments-list no-bullet">
                    {this.state.comments.map(this.renderComment)}
                </ul>
            </div>
        )
    }
}

export default Comments