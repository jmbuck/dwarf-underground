import React, { Component } from 'react'
import './navlinks.css'

class NavLinks extends Component {
    render() {
        return (
            <div className="float-right nav-links">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Log in</a>
            </div>
        );
    }
}

export default NavLinks