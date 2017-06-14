import React, { Component } from 'react'
import './articlelinks.css'
import Comments from './comments'

class ArticleLinks extends Component {
    constructor() {
        super()
        this.state = {
            classes: 'comments hide'
        }
    }

    handleClick(e) {
        e.preventDefault();
        if(this.state.classes !== 'comments') {
            this.setState({classes: 'comments'});
        }
        else {
            this.setState({classes: 'comments hide'});
        }
    }

    render() {
        return (
            <div>
                <div className="article-links">
                    <a onClick={this.handleClick.bind(this)} href='#' className="article-link">
                        <i className="fa fa-comments-o"></i>
                        <span className="article-link-text">Comments</span>
                    </a>
                    <a className="article-link" href="#">
                        <i className="fa fa-share"></i>
                        <span className="article-link-text">Share Post</span>
                    </a>
                </div>
                <div className={this.state.classes}>
                        <Comments />
                </div>
            </div>
        )
    }
}

export default ArticleLinks