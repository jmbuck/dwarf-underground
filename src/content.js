import React, { Component } from 'react';
import Article from './article';
import Ad from './ad';
import MoreArticles from './morearticles';

class Content extends Component {
    render() {
        return (
            <main className="expanded row">
                <Article />
                <Ad />
                <MoreArticles />  
            </main>
        )
    }
}

export default Content