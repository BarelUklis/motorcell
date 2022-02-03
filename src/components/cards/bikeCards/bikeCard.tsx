import * as React from 'react';
import { Component } from 'react';
import { Motorcycle } from '../../../webServices/motorcycles';
import './bikeCard.css';
import { Skeleton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BikeCard = (props: {bikeArray:any}) => {

    const motorcyclesArray = props.bikeArray;
    const navigate = useNavigate()


    const goToBikePage = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        let bikeModel = e.target.closest('.mainCard').id;
        navigate(bikeModel);
    }
    
    return motorcyclesArray.map((bike: Motorcycle, i:number) => 

        <div onClick={(e) => goToBikePage(e)} id={bike.id + ' ' + bike.model} className="mainCard" key={`${bike.company} div: ${i}`}>

            <div className='info'>

                <div className='infoInner'>
                    <div className='company'>
                        <h2 className='infoHeads headMain'>{bike.company}</h2>
                        <h3 className='infoHeads headMain' style={bike.model.length > 15 ? {fontSize: '5.4mm', marginRight: '1mm'} : {}}>{bike.model}</h3>
                        <h4 className='infoHeads'>{bike.year}</h4>
                    </div>

                        <ul className='specUl'>
                            <li className='specLi'>Engine: {bike.engine}</li>
                            <li className='specLi'>Power: {bike.power}</li>
                            <li className='specLi'>Gears: {bike.gears}</li>
                        </ul>
                </div>

                <div className='logo'>
                    <img className='logoPic' src={bike.logo} alt='logo' />
                </div>

            </div>
            
            <div className="imgDiv" style={{background: `linear-gradient(180deg, #c3c3c3 10% , ${bike.company === 'Yamaha' || bike.company ===  'Suzuki' ? 'rgb(102, 113, 141)' : bike.company === 'Kawasaki' ? 'rgb(103, 140, 102)' : 'rgb(140, 106, 102)'} 120%)`}}>
                {bike.pic ? <img className='bikePic' src={bike.pic} alt='bikePhoto'/> :
                 <Skeleton variant="rectangular" width={40 + ' vw'} height={37 + ' vh'} />} 
            </div>
        
        </div>
    )
        
}

export default BikeCard;