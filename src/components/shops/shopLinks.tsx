import * as React from 'react';
import { Component } from 'react';
import { Link, useParams } from 'react-router-dom';
import './shopLinks.css';

const ShopList = () => {

    const {shop} = useParams();
    const motorcycleType = ['Sport', 'Naked', 'Adventure', 'Offroad'];
    const scooterType = ['125cc', '250cc', 'Sport'];
    const motorcycleBrand = ['Yamaha', 'Suzuki','Honda','Kawasaki'];
    const scooterBrand = ['Yamaha', 'Honda', 'Piaggio', 'Vespa'];

    const gear = ['Helmets', 'Armored tops', 'Armored pants', 'Boots', 'Gloves', 'Rain gear', 'Raiding suits', 'Race suits'];
    const services = ['Consult before buying', 'Garage', 'Towing-and-transportation']
    
    const a = () => {
        let x;
        if(shop === 'Motorcycles') {
            x = motorcycleType.map(type => 
                <div className='typeList'>
                    <h2>{type}</h2>
                    <ul>
                            {motorcycleBrand.map(brand =>
                                <li><Link className='shopLinks-link' to={`/Motorcycles/${type}/${brand}`}>{brand}</Link></li> )}
                    </ul>
                </div>
                
                )
        } else if(shop === 'Scooters') {
            x = scooterType.map(type => 
                <div className='typeList'>
                    <h2>{type}</h2>
                    <ul>
                            {scooterBrand.map(brand =>
                                <li><Link className='shopLinks-link' to={`/Motorcycles/${type}/${brand}`}>{brand}</Link></li> )}
                    </ul>
                </div>
                
                )
        } else if(shop === 'Gear') {
            x = (
                <div className='typeListSingle' style={{width: '65mm'}}>
                    <h2>Gear</h2>
                    <ul>
                            {gear.map(type =>
                                <li><Link className='shopLinks-link' to={`/Gear/${type.replace(/ /g,'-')}`}>{type}</Link></li> )}
                    </ul>
                </div>
                
                )
        } else if(shop === 'Services') {
            x = (
                <div className='typeListSingle' style={{width: '85mm'}}>
                    <h2>Services</h2>
                    <ul>
                            {services.map(type =>
                                <li><Link className='shopLinks-link' to={`/Services/${type.replace(/ /g,'-')}`}>{type}</Link></li> )}
                    </ul>
                </div>
                
                )
        }
        return x;
    }    

    return (
        <div className='mainPageTemplate mainPageHeight'>
            <div className='headlingMain'>
                <h1 className='mainPageHeadling'>{shop}</h1>
            </div>
            <div className="shopList">
                {a()}
            </div>
        </div>
    )
}

export default ShopList;