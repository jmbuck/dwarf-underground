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
         return <li key={i}>{comment}</li>
    }

    handleSubmit(ev) {
        ev.preventDefault();
        if(this.commentInput.value !== '') {
            const comments = [...this.state.comments]
            comments.unshift(this.commentInput.value)
            this.setState({ comments })
            console.log(comments);
            //save
            localStorage.setItem('comments', JSON.stringify(comments))
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
                <ul className="no-bullet">
                    {this.state.comments.map(this.renderComment)}
                </ul>
            </div>
        )
    }
}

export default Comments