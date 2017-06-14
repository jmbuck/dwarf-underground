import React, { Component } from 'react';
import './morearticles.css'
import ArticlePreview from './articlepreview'

class MoreArticles extends Component {
    constructor() {
        super()
        this.state = {
            info: [{desc: 'Single Orcs in Indianapolis', img: 'https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif', alt: 'orc'},
                   {desc: 'You won\'t believe what\'s under this mountain', img: 'https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg', alt: 'mountain'},
                   {desc: 'Mine 20% more gold with One Weird Trick', img: 'http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg', alt: 'gold'},
                   {desc: 'Surprise for Indiana Hobbits born before 1999', img: 'http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg', alt: 'hobbit'}]   
        }
    }

    render() {
        return (
        <div className="small-12 columns other-articles">
            <h2>From around the Realm</h2>
            {this.state.info.map(info => {return <ArticlePreview desc={info.desc} img={info.img} alt={info.alt}/>})}
        </div>
        );
    }
}

export default MoreArticles