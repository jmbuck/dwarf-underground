import React, { Component } from 'react'
import './comments.css'

class Comments extends Component {
    constructor() {
        super()
        this.state = {
            comments: [],
        }
        this.load();
    }

    load() {
        this.setState({ comments: JSON.parse(localStorage.getItem('comments')) })
    }

    save() {
        console.log('saved!');
        localStorage.setItem('comments', JSON.stringify(this.state.comments))
    }

    renderComment(comment, i) {
         return <li key={i}>{comment}</li>
    }

    handleSubmit(ev) {
        ev.preventDefault();
        const comments = [...this.state.comments]
        comments.unshift(this.commentInput.value)
        this.setState({ comments })
        this.save()
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <textarea 
                    name="commentBox" 
                    placeholder="Leave your comment here!"
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