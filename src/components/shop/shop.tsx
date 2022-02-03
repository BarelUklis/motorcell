import * as React from 'react';
import { Component } from 'react';
import BikeCard from '../cards/bikeCards/bikeCard';
import './shop.css';
import { useParams } from 'react-router-dom';
import GearCard from '../cards/gearCards/gearCard';


const Shop = (props: {bikeArray?: any, gearArray?: any}) => {
    const {type} = useParams();

    const bikesArray = props.bikeArray;
    const gearsArray = props.gearArray;
    let x: any;

    if(type === 'Motorcycles' || type === 'Scooters') {
        x = <BikeCard bikeArray={bikesArray}/>;
    } else {
        x = <GearCard gearArray={gearsArray}/>;
    }
    
        return (
        <div className="mainShop" style={{height: '100%'}}>
            {x}              
        </div> 
        )
}

export default Shop;        