import React, { Component } from 'react';
import {Link} from 'react-router-dom'
export default class NavBar extends Component {
    state = {  }
    render() {
        return (
            <div>
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li>Read the Book</li>
                    
                </ul>
            </div>
        );
    }
}