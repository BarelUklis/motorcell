import * as React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';

const NavItem = (props: { text?: {} | string | any | null | undefined; icon?: string; children?: any; extand?:boolean, link: string, perentCallback: Function, isOpen: boolean, handleDropdownCallback: Function, dropTarget: string}) => {

    let clickTarget = props.dropTarget;
    let open = props.isOpen;

    const onTrigger = (boolean: boolean) => {
        props.perentCallback(boolean)
    }

    const onDropdown = (dropdown: string) => {
        props.handleDropdownCallback(dropdown);
    }

    const handleNavOpen = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        e.target.id === props.text ? onTrigger(!open) : onTrigger(open);
        onDropdown(e.target.id);    
    }    


    const textSize  = () => {
        let style = {};
        if(props.text) {
            style = {marginLeft: '10px', marginRight: '10px'}
            if(props.text.length > 5) {
                style = {marginLeft: '15px', marginRight: '15px'}
            }
            if(props.text.length > 8) {
                style = {marginLeft: '20px', marginRight: '20px', width: '100px'}
            }
            if(props.text.length > 11) {
                style = {marginLeft: '25px', marginRight: '25px', width: '100px'}
            }
        } else {
            style = {marginLeft: '7px'}
        }
        
        return style;
    }

    {if(props.extand) {        
        return (
            <div className='nav-item2' style={textSize()} > 
            <span id={props.text} key={props.text} className={'icon-button2 icon ' + props.icon} style={props.text ? {borderRadius: '20%', padding: '0px' } : {borderRadius: '50%'}} onClick={(e) => handleNavOpen(e)}>
                {props.text}
            </span>

            {open && props.text === clickTarget && props.children}
        </div>
        )
    } else {
        
        return <li className='nav-item2' style={textSize()}> 
            <Link key={props.text} to={`/${props.link}`} className={'icon-button2 icon ' + props.icon} style={props.text ? {borderRadius: '20%', padding: '0px'} : {borderRadius: '50%'}}>
                {props.text}
            </Link>
        </li>
    }}
   
}
export default NavItem;