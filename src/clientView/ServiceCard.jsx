import React, { Component } from 'react';

export default class ServiceCard extends Component {
    state = {  }
    render() {
        return (
            <div style={{width:'45%', 
            margin:'20px'
            }}>
                <h1 style={{textAlign:'center'}}>{this.props.serviceName}</h1>
            </div>
        );
    }
}