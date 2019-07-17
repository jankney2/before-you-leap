import React, { Component } from 'react';
import ServiceCard from './ServiceCard'


export default class Services extends Component {
    state = {  }
    render() {
        return (
            <div style={{
                
                display:'flex', 
                justifyContent:'space-evenly',
                alignItems:'center',
                flexWrap:'wrap'
            }}>
                <ServiceCard serviceName='Start An LLC'/>
                <ServiceCard serviceName='Have Joel Review A contract'/>
                <ServiceCard serviceName='Have Joel resolve a dispute with your gig economy business'/>
                <ServiceCard serviceName='Have Joel Draft a contract'/>
            </div>
        );
    }
}