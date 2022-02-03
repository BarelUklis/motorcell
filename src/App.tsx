import './App.css';
import DropDownMenu from './components/navbar/dropDown';
import Navbar from './components/navbar/navbar';
import NavItem from './components/navbar/navitem';
import {Routes, Route, Navigate, useLocation} from 'react-router-dom';
import BikeShop from './components/shops/bikeShop';
import Home from './components/home/home';
import GearShop from './components/shops/gearShop';
import { getMotorcycles, Motorcycle } from './webServices/motorcycles';
import { getGear } from './webServices/gear';
import Services from './components/services/services';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import ShopList from './components/shops/shopLinks';
import Register from './components/forms/register';
import BikePage from './components/cards/bikeCards/bikePage';
import { useState } from 'react';

function App() {
  /************************************************************ */
  const handleCallback = (childData: boolean) => {
    setOpen(childData);
    return childData; 
  }
  const [open, setOpen] = useState(false);

  const handleDropdownCallback = (childData: string) => {
    setClickTarget(childData);
    return childData;
  }
  const [clickTarget, setClickTarget] = useState('');  

  const handleCarousle = (childData: string) => {
    setActive(childData);
    return childData;
  }
  let [active, setActive] = useState('1');

  

  /********************************************************* */

  /* URL LOCATIONS */
  const location = useLocation();
  const filterdType = location.pathname.replace(/\//g, ' ').split(' ')[1];
  const filterdStyle = location.pathname.replace(/\//g, ' ').split(' ')[2];
  const filterdBrand = location.pathname.replace(/\//g, ' ').split(' ')[3];
  

  /* RETURN THE BIKE AND GEAR ARRAY FILTERD */
  const equimpentArray = getGear().filter(item =>       
  {
    return (item.type === filterdStyle);
  });       

  const motorcyclesArray = getMotorcycles().filter(bike => 
  {
    return  (bike.type.toLowerCase() === filterdType.toLowerCase() && bike.style.toLowerCase() === filterdStyle.toLowerCase() && bike.company.toLowerCase() === filterdBrand.toLowerCase());
  }); 
    

  /* ICONS */
  const icons:{icon:string, disc:string}[] = [
    {icon: '', disc: 'empty'},
    {icon: 'far fa-dot-circle', disc: 'solid-circle'},
    {icon: 'fas fa-dot-circle', disc: 'hollow-circle'}
  ];


  /* NAVBAR ITEMS */
  const navItems: {icon?:string, text?:string, extand?:boolean, link:string, open?:boolean | undefined, setOpen?: Function | undefined}[] = [
    { text: 'Home', link:'Home'},
    { text: 'Motorcycles', link:'Motorcycles', extand: true, open:open, setOpen: setOpen},
    { text: 'Scooters',link:'Scooters', extand: true, open:open, setOpen: setOpen},
    { text: 'Gear',link:'Gear', extand: true, open:open, setOpen: setOpen},
    { text: 'Services',link:'Services', extand: true, open:open, setOpen: setOpen},
    { text: 'About', link:'About'},
    { text: 'Contact', link:'Contact'}
  ];

  /* FOOTER ITEMS */
  const footerItems: {text: string, link:string}[] = [
    {text: 'Home', link:'Home'},
    {text: 'Motorcycles', link:'Shops/Motorcycles'},
    {text: 'Scooters', link:'Shops/Scooters'},
    {text: 'Gear', link:'Shops/Gear'},
    {text: 'Services', link:'Shops/Services'},
    {text: 'About', link:'About'},
    {text: 'Contact', link:'Contact'}
  ]


  /* CREATE THE NAVBAR */
  const createNavBar =  () => {   
    return navItems.map((navItem, i) =>
      navItem.extand ? 
      <NavItem dropTarget={clickTarget} handleDropdownCallback={handleDropdownCallback} isOpen={open} perentCallback={handleCallback} key={'navItem' + i} icon={navItem.icon} text={navItem.text} extand={navItem.extand} link={navItem.link}>
        <DropDownMenu perentCallback={handleCallback} key={'DPmanu ' + i} activeMenu={navItem.text}>

        </DropDownMenu>
      </NavItem>
      :
      <NavItem dropTarget={clickTarget} handleDropdownCallback={handleDropdownCallback} isOpen={open} perentCallback={handleCallback} key={i} icon={navItem.icon} text={navItem.text} link={navItem.link} />
    );
  }

  /* CREATE THE FOOTER */
  const createFooter = () => {
    return footerItems.map((footerItem, i) => 
    <NavItem dropTarget={clickTarget} handleDropdownCallback={handleDropdownCallback} key={'footerItem ' + i} text={footerItem.text} link={footerItem.link} isOpen={open} perentCallback={handleCallback}>

    </NavItem>
    )
  }
  

  /* THE APP */
  return (
    <div className="App">
      <Navbar open={open} setOpen={setOpen}>
        {createNavBar()}      
      </Navbar>
      <Routes>
        <Route path='/Home' element={<Home handleCarousle={handleCarousle} isActive={active}/>}/>
        <Route path='/:type/:style/:brand' element={<BikeShop motorcyclesArray = {motorcyclesArray}/>}/>
        <Route path='/:type/:style/:brand/:model' element={<BikePage motorcyclesArray = {motorcyclesArray} />}/>
        <Route path='/Gear/:gear' element={<GearShop equimpentArray={equimpentArray}/>}/>
        <Route path='/Services/:service' element={<Services />}/>
        <Route path='/Shops/:shop' element={<ShopList />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/Register' element={<Register />}/>
        <Route path='/' element={<Navigate replace to='/Home'/>}/>
      </Routes>
      <Footer>
       {createFooter()}
      </Footer>
    </div>
  )
}

export default App
