import * as React from 'react';
import { Component } from 'react';
import {useParams} from 'react-router-dom';
import { getMotorcycles } from '../../webServices/motorcycles';
import Shop from '../shop/shop';

const BikeShop = (props: {motorcyclesArray:any}) => {

    const bikesArray = props.motorcyclesArray;
    
    const { style, brand, type } = useParams();
    
    return (
        <div className='mainPageTemplate mainPageHeight'>
            <h1 className='mainPageHeadling headlingMain'>{type}</h1>
            <h1 className='mainPageHeadling headlingSec'>{`${brand} ${style}'s`}</h1>
                <Shop bikeArray={bikesArray} />
        </div>
    )
}

export default BikeShop;