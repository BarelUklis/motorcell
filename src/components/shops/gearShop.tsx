import * as React from 'react';
import { Component } from 'react';
import {useParams} from 'react-router-dom';
import { getGear } from '../../webServices/gear';
import Shop from '../shop/shop';

const GearShop = (props: {equimpentArray:any}) => {

    const gearsArray = props.equimpentArray;

    const { gear } = useParams();

    let gearName: any = gear;    
        
    return (
        <div className='mainPageTemplate mainPageHeight'>
            <div className='headlingMain'>
                <h1 className='mainPageHeadling'>{gearName.replace(/-/g,' ')}</h1>
            </div>    
                <Shop gearArray={gearsArray}/>
        </div>
    )
}

export default GearShop;