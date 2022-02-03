import * as React from 'react';
import { Component } from 'react';
import {CSSTransition} from 'react-transition-group';
import { useNavigate, useParams } from 'react-router-dom';
import { Motorcycle } from '../../../webServices/motorcycles';
import './bikePage.css';

const BikePage = (props: {motorcyclesArray: Motorcycle[]}) => {

    const {model} = useParams();
    const navigate = useNavigate();

    const [activeContact, setActiveContact] = React.useState(false);

    let bikeModel = props.motorcyclesArray.filter(bike => 
        bike.id === model?.replace(/\//g, ' ').split(' ')[0])

    let bike = bikeModel[0];

    const closeBikePageContact = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if(activeContact === true) {
            let x = e.target.closest('#contactUsCard');
            let y = e.target.closest('div');
            x !== y ? setActiveContact(false) : '';
            console.log(x);
            console.log(y);
        }
        
    }
            
    const BikePageContact = () => {
    
        return ( 
        <div id='contactUsDiv' className="contactUsDiv">
            <div id='contactUsCard' className="contactUsCard">

                <h1>Contact us</h1>
                <p>leave details and well call you back as soon as we can</p>
                <form className='contactUsForm' action="" >

                    <section className="formInner">
                        <section className="formText">
                            <p>First name: </p>
                            <p>Last name: </p>
                            <p>Phone: </p>
                            <p>Email: </p>
                        </section>

                        <section className="formLine">
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <input type="email" />
                        </section>
                    </section>

                    <section className="submitButtonDiv">
                        <button className='contactSubButton' type="submit">submit</button>
                    </section>

                </form>

            </div>
        </div> 
        )
    }
    
    return (
        <div onClick={(e) => closeBikePageContact(e)} className="bikePageMain mainPageTemplate mainPageHeight">
            <div className="bikePageCard" style={activeContact ? {filter: 'blur(15px'} : {filter: 'none'}}>
                <button id='backButton' onClick={() => navigate('./..')}>back <i className="fas fa-chevron-right"></i></button>
                <h1 className='bikePageHeadling'>{bike.company + ' ' + bike.model}</h1>
                
                <div className="bikePagePic">
                    <img src={bike.pic} alt='bike Picture' />
                </div>
                
                <div className="bikePageInfo">
                
                    <div className="bikePageGeneral">
                        <h2>General Information</h2>
                        <p>{bike.discription + bike.discription}</p>
                    </div>

                    <div className="bikePageSpec">
                        <h2>Specifications</h2>
                        <div className="bikePageSpecList">
                            <ul>
                                <li>Engine: {bike.engine}</li>
                                <li>Power: {bike.power}</li>
                                <li>Gears: {bike.gears}</li>
                            </ul>
                            <ul>
                                <li>Engine: {bike.engine}</li>
                                <li>Power: {bike.power}</li>
                                <li>Gears: {bike.gears}</li>
                            </ul>
                            <ul>
                                <li>Engine: {bike.engine}</li>
                                <li>Power: {bike.power}</li>
                                <li>Gears: {bike.gears}</li>
                            </ul>
                            <ul>
                                <li>Engine: {bike.engine}</li>
                                <li>Power: {bike.power}</li>
                                <li>Gears: {bike.gears}</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bikePageContact">
                        <div className="bikePageContactHeadAndButton">
                            <h2>Contact us</h2> <button onClick={() => setActiveContact(true)} className="contactButton">Here</button>
                        </div>
                        <p>Interested in the bike? <br />
                            Have a question? <br />
                            Leave details and well call you <br />
                        </p>
                    </div>

                </div>
            </div>
            {activeContact ? <BikePageContact/> : null}
        </div>
    )
}

export default BikePage;