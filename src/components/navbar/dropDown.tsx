import * as React from 'react';
import { Component } from 'react';
import './navbar.css';
import {CSSTransition} from 'react-transition-group';
import { EnterHandler } from 'react-transition-group/Transition';
import {Link} from 'react-router-dom'
import {useParams, useLocation} from 'react-router-dom'
import BuildIcon from '@mui/icons-material/Build';

const DropDownMenu: Function = (props: {activeMenu?: any, perentCallback: Function}) => {

    const [activeManu, setActiveManu] = React.useState(props.activeMenu);
    const [menuHeight, setMenuHeight] = React.useState('50px');
    const motorcycles = ['Yamaha', 'Suzuki', 'Honda', 'Kawasaki'];
    const scooters = ['Yamaha', 'Honda', 'Piaggio', 'Vespa'];

    /********************************************** */

    const onTrigger = (boolean: boolean) => {
        props.perentCallback(boolean)
    }

    /******************************************** */

    const calcHeight = (x: { offsetHeight: any; }) => {
        const height = x.offsetHeight;
        setMenuHeight(height);

    }

    const DropDownItem = (props: { goToMenu?: React.SetStateAction<string>; leftIcon?: string | undefined; children?: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined | any; rightIcon?: string | undefined, keyAsId: string | undefined, open?: boolean | undefined, setOpen?: Function | undefined}) =>{        
        return (
            <li id={props.keyAsId} key={props.keyAsId} className='manu-item' onClick={() => props.goToMenu && setActiveManu(props.goToMenu)}>
                <span id={props.keyAsId} key={props.keyAsId + ' span1'} className={"icon-button2 " + props.leftIcon}></span>
                {props.children}
                <span key={props.keyAsId + ' span2'} className={"icon-right2 " + props.rightIcon}></span>
            </li>
        )
    } 
    
    /* ================== DROPDOWN MENUS ARRAYS =================================*/
    ////////////////////////////////////////////////////////////////////////
    let as = BuildIcon;

    const icons: any = ['far fa-dot-circle','fas fa-chevron-right'];
    const dropDownShopItemsArray:{head:string, items:string[]}[] = [
        {head: 'motorcycles', items: ['sport', 'naked', 'adventure', 'offroad']},
        {head:'scooters', items: ['125cc', '250cc', '500cc']},
        {head: 'gear', items: ['helmets',  'armored tops', 'armored pants', 'boots', 'gloves', 'rain gear', 'raiding suits', 'race suits']},
        {head: 'services', items: ['consult before buying', 'garage', 'towing and transportation']}
    ];
    ////////////////////////////////////////////////////////////////////////


    //==================== CREATE MENUS ===========================
    // Return a dropdown list with inner list with links
    const dropDownItemsCreate = (index:number) => {
        const array = dropDownShopItemsArray;
        return (
            array[index].items.map((item, i) => 
            <DropDownItem
            keyAsId={i.toString()}
            key={`${item} ${i} dropDown`}
            rightIcon={icons[1]}
            goToMenu={item}>{item[0].toUpperCase() + item.substring(1)}</DropDownItem>
            )
        )         
    }

    // Return a dropdown list with links
    const dropDownItemsCreateSingle = (index:number) => {
        const array = dropDownShopItemsArray;
        return (
            array[index].items.map((item, i) => 
            <DropDownItem keyAsId={i.toString()} key={i.toString()}>
                <Link onClick={() => onTrigger(false)} key={item + ' link'} id={i} className='itemLink' to={`${array[index].head[0].toUpperCase() + array[index].head.substring(1) }/${item[0].toUpperCase() + item.replace(/ /g,'-').substring(1)}`} >{item[0].toUpperCase() + item.substring(1)}</Link>
                </DropDownItem>
            )
        )         
    }
    ////////////////////////////////////////////////////////////////


    return (
        
        <div className="dropdown" style={{ height: menuHeight + 'px'}}>

            {/* ========================MOTORCYCLES=========================== */}

            <CSSTransition 
            in={activeManu === 'Motorcycles'} 
            unmountOnExit 
            timeout={500} 
            classNames='menu-primary'
            onEnter={calcHeight}>

            <div className="menu">
            {dropDownItemsCreate(0)}    
            </div>

            </CSSTransition>

            {/* ====================MOTORCYCLES-INNER======================== */}
            {/* ====================SPORT============================== */}
            <CSSTransition 
            in={activeManu === 'sport'} 
            unmountOnExit 
            timeout={500} 
            classNames='menu-secondary'
            onEnter={calcHeight}
            >

            <div className="menu">
            {motorcycles.map((motorcycle, i:number) => {
                return <DropDownItem keyAsId={i.toString()}><Link onClick={() => onTrigger(false)} id={i} key={i} className='itemLink' to={`Motorcycles/Sport/${motorcycle}`}>{motorcycle}</Link></DropDownItem>
            })}
            </div>

            </CSSTransition>
            {/* =====================NAKED=========================== */}
            <CSSTransition 
            in={activeManu === 'naked'} 
            unmountOnExit 
            timeout={500} 
            classNames='menu-secondary'
            onEnter={calcHeight}
            >

            <div className="menu">
            {motorcycles.map((motorcycle, i) => {
                return <DropDownItem keyAsId={i.toString()}><Link onClick={() => onTrigger(false)} key={i} className='itemLink' to={`Motorcycles/Naked/${motorcycle}`}>{motorcycle}</Link></DropDownItem>
            })}
            </div>

            </CSSTransition>
            {/* ====================ADVENTURE============================== */}
            <CSSTransition 
            in={activeManu === 'adventure'} 
            unmountOnExit 
            timeout={500} 
            classNames='menu-secondary'
            onEnter={calcHeight}
            >

            <div className="menu">
            {motorcycles.map((motorcycle, i) => {
                return <DropDownItem keyAsId={i.toString()}><Link onClick={() => onTrigger(false)} key={i} className='itemLink' to={`Motorcycles/Adventure/${motorcycle}`}>{motorcycle}</Link></DropDownItem>
            })}
            </div>

            </CSSTransition>
            {/* ====================OFFROAD============================== */}
            <CSSTransition 
            in={activeManu === 'offroad'} 
            unmountOnExit 
            timeout={500} 
            classNames='menu-secondary'
            onEnter={calcHeight}
            >

            <div className="menu">
            {motorcycles.map((motorcycle, i) => {
                return <DropDownItem keyAsId={i.toString()}><Link onClick={() => onTrigger(false)} key={i} className='itemLink' to={`Motorcycles/Offroad/${motorcycle}`}>{motorcycle}</Link></DropDownItem>
            })}
            </div>

            </CSSTransition>
            {/* ============================================================== */}

            {/* ====================SCOOTERS============================== */}

            <CSSTransition
            in={activeManu === 'Scooters'} 
            unmountOnExit 
            timeout={500} 
            classNames='menu-primary'
            onEnter={calcHeight}
            > 
            {/* ====================125CC */}
            <div className="menu">
            {dropDownItemsCreate(1)}
            </div>
            </CSSTransition>

            {/* ====================SCOOTERS-INNER============================== */}
            {/* ====================125CC============================== */}
            <CSSTransition 
            in={activeManu === '125cc'} 
            unmountOnExit 
            timeout={500} 
            classNames='menu-secondary'
            onEnter={calcHeight}
            >

            <div className="menu">
            {scooters.map((scooter, i) => {
                return <DropDownItem keyAsId={i.toString()}><Link onClick={() => onTrigger(false)} key={i} className='itemLink' to={`Scooters/125cc/${scooter}`}>{scooter}</Link></DropDownItem>
            })}
            </div>

            </CSSTransition>
            {/* =====================250CC-500CC=========================== */}
            <CSSTransition 
            in={activeManu === '250cc'} 
            unmountOnExit 
            timeout={500} 
            classNames='menu-secondary'
            onEnter={calcHeight}
            >

            <div className="menu">
            {scooters.map((scooter, i) => {
                return <DropDownItem keyAsId={i.toString()}><Link onClick={() => onTrigger(false)} key={i} className='itemLink' to={`Scooters/250cc/${scooter}`}>{scooter}</Link></DropDownItem>
            })}
            </div>

            </CSSTransition>
            {/* ====================SPORT============================== */}
            <CSSTransition 
            in={activeManu === '500cc'} 
            unmountOnExit 
            timeout={500} 
            classNames='menu-secondary'
            onEnter={calcHeight}
            >

            <div className="menu">
            {scooters.map((scooter, i) => {
                return <DropDownItem keyAsId={i.toString()}><Link onClick={() => onTrigger(false)} key={i} className='itemLink' to={`Scooters/500cc/${scooter}`}>{scooter}</Link></DropDownItem>
            })}
            </div>

            </CSSTransition>

            {/* ============================================================== */}

            {/* ====================GEAR============================== */}

            <CSSTransition
            in={activeManu === 'Gear'} 
            unmountOnExit 
            timeout={500} 
            classNames='menu-primary'
            onEnter={calcHeight}> 

            <div className="menu">
            {dropDownItemsCreateSingle(2)}
            </div>
            </CSSTransition>

            {/* ====================SERVICES============================== */}

            <CSSTransition
            in={activeManu === 'Services'} 
            unmountOnExit 
            timeout={500} 
            classNames='menu-primary'
            onEnter={calcHeight}> 

            <div className="menu">
            {dropDownItemsCreateSingle(3)}
            </div>
            </CSSTransition>

        </div> // className = dropdown
    );
}

export default DropDownMenu;