import * as React from 'react';
import { Component } from 'react';
import './footer.css';

const Footer = (props: {children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined}) => {  

    const social: {name: string, className: string, url: string}[] = [
        {name: 'facebook' ,className:' fab fa-facebook', url: 'https://www.facebook.com/'},
        {name: 'instagram' ,className:' fab fa-instagram', url: 'https://www.instagram.com/'},
        {name: 'twitter' ,className:' fab fa-twitter', url: 'https://twitter.com/'},        
    ];

    return (
        <div className="footerMain">

            <div className="footerSec">
                <div className="footer-links">
                    <ul className="footer-foot">
                        {props.children}
                    </ul>
                </div>

                
            </div>
            
            <div className="footerBottom">

                <div className="footer-write">
                    <h2 className='footer-headling'>Metro <i className="fas fa-motorcycle"></i> Motor</h2>
                    <p>since 2007</p>
                </div>

                <div className="footer-icons">
                    <ul className='footer-foot'>
                    {social.map((icon, i) => 
                        <a key={i} className='footer-icon' target='_blank' href={icon.url}><i className={icon.className + ' icon'}></i></a>)}
                    </ul>
                </div>

            </div>
        </div>
    )

}

export default Footer;