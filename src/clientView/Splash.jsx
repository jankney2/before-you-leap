import React, { Component } from 'react';
import Hero from './Hero'
import Services from './Services'

export default class Splash extends Component {
    state = {  }
    render() {
        return (
            <div>
                <Hero />
                <Services />
            </div>
        );
    }
}