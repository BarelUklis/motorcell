import * as React from 'react';
import { Component } from 'react';
import { Gear } from '../../../webServices/gear';
import './gearCard.css';

const GearCard = (props: {gearArray:any}) => {

    const gearArray = props.gearArray;
        
    return              gearArray.map((item: Gear, i: number) => 
        <div key={`${item.itemId} ${i}`} className="mainCardG">
                <img className='gearPic' src={item.pic} alt='gearPicture'/>

                <div className="infoGear">

                        <h2>{item.itemName}</h2>
                        <h2>{item.brand}</h2>
                        
                        <div className="gearPriceCode">
                                <p>price: {item.price}</p>
                        </div>
                                          
                </div>

        </div>
    );
}

export default GearCard;