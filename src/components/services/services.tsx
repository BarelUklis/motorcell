import * as React from 'react';
import { Component } from 'react';
import { useParams } from 'react-router-dom';
import Consult from './consult';
import Garage from './garage';
import TowAndTransport from './towing';

const Services = () => {

    const { service } = useParams();

    return (

    <div className='mainPageTemplate mainPageHeight'>
            <div className='headlingMain'>
                <h1 className='mainPageHeadling'>{service?.replace(/-/g,' ')}</h1>
            </div>
            {service?.toLowerCase() === 'consult-before-buying' ? <Consult /> :
            service?.toLowerCase() === 'garage' ? <Garage/> : <TowAndTransport/>}
        </div>

    )
}

export default Services;