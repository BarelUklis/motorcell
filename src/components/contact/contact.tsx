import * as React from 'react';
import { Component } from 'react';
import './contact.css';

const Contact = () => {
    return ( 
        <div className='mainPageTemplate mainPageHeight'>
            <div className='headlingMain'>
                <h1 className='mainPageHeadling'>Contact us</h1>
            </div>
            
            <div className="servicesDiv">

                <div className="servicesSection">
                    <h2 className="servicesSecHead">Exhibition hall</h2>
                    <p style={{marginBottom: '1.5mm'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore fuga distinctio earum. Minus, suscipit in quisquam possimus velit, quod fugiat sequi, aliquid exercitationem cumque sed.</p>
                    <ul className='servicesList'>
                        <li>Phone: 4678956985</li>
                        <li>Adress: Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                        <li>Opening hours: Sunday to Thursday , 09:00 - 18:00</li>
                    </ul>
                </div>

                <div className="servicesSection">
                    <h2 className="servicesSecHead">Garage</h2>
                    <p style={{marginBottom: '1.5mm'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore fuga distinctio earum. Minus, suscipit in quisquam possimus velit, quod fugiat sequi, aliquid exercitationem cumque sed.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore fuga distinctio earum. Minus, suscipit in quisquaue sed.</p>
                    <ul className='servicesList'>
                        <li>Phone: 4678956987</li>
                        <li>Adress: Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                        <li>Opening hours: Sunday to Thursday , 09:00 - 16:00</li>
                    </ul>
                </div>

                <div className="servicesSection">
                    <h2 className="servicesSecHead">Leave details and well call you</h2>

                    <form className='contactUsForm' action="" >

                    <div className="formInner">
                        <div className="formText">
                            <p className='formParaContactPage'>First name: </p>
                            <p className='formParaContactPage'>Last name: </p>
                            <p className='formParaContactPage'>Phone: </p>
                            <p className='formParaContactPage'>Email: </p>
                        </div>

                        <div className="formLineContactPage">
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <input type="email" />
                        </div>
                    </div>

                    <div className="submitButtonDivContactPage">
                        <button className='contactSubButtonContactPage' type="submit">submit</button>
                    </div>

                </form>

                </div>
                
            </div>
        </div>
         );
}

export default Contact;