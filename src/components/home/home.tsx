import * as React from 'react';
import { Component } from 'react';
import './home.css';
import { getMotorcycles, Motorcycle } from '../../webServices/motorcycles';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Home = (props: {handleCarousle: Function, isActive: string}) => {


    let active = props.isActive;

    const randomMotorcycles = (): any => {
        const random = Math.floor(Math.random()*(getMotorcycles().length));
        const bike = getMotorcycles()[random]

        return ( 
            <>
            <CSSTransition
            in={active === '1'}
            appear={active === '1'}
            timeout={1000}
            classNames='fade'
            unmountOnExit
            >
            <Link to={`/${bike.type}/${bike.style}/${bike.company}/${bike.id + ' ' + bike.model}`}>
            <div className="carouselInfo">

                <div className="carouselHeadlings" style={bike.company === 'Honda' ? {marginBottom: '-3mm'} : {marginBottom: '3mm'}}>
                    <h2 className='carouselH2 headlingC'>{bike.company}</h2>
                    <h3 className='carouselH3 headlingC'>{bike.model}</h3>
                </div>
                
                <div className='carouselPicDiv'>
                    <img className='carouselPic' style={bike.company === 'Kawasaki' ? {maxWidth: '40vw'} : bike.company === 'Honda' ? {maxWidth: '40vw'} : bike.company === 'Yamaha' ? {maxWidth: '30vw'} : {maxWidth: '35vw'}} src={bike.pic} alt='carousel bike'/>
                </div>

            </div>
            </Link>
            </CSSTransition> 
            
            <CSSTransition
            in={active === '2'}
            appear={active === '2'}
            timeout={1000}
            classNames='fade'
            unmountOnExit
            >
            <Link to={`/${bike.type}/${bike.style}/${bike.company}/${bike.id + ' ' + bike.model}`}>
            <div className="carouselInfo">

                <div className="carouselHeadlings" style={bike.company === 'Honda' ? {marginBottom: '-3mm'} : {marginBottom: '3mm'}}>
                    <h2 className='carouselH2 headlingC'>{bike.company}</h2>
                    <h3 className='carouselH3 headlingC'>{bike.model}</h3>
                </div>
                
                <div className='carouselPicDiv'>
                    <img className='carouselPic' style={bike.company === 'Kawasaki' ? {maxWidth: '40vw'} : bike.company === 'Honda' ? {maxWidth: '40vw'} : bike.company === 'Yamaha' ? {maxWidth: '30vw'} : {maxWidth: '35vw'}} src={bike.pic} alt='carousel bike'/>
                </div>

            </div>
            </Link>
            </CSSTransition>
            </>
        )
    }      

    const bike = randomMotorcycles();
    const [pic, setPic] = React.useState(bike);    
    

        return ( 
        <div className='mainPageTemplate mainPageHeight'>
            <div className='headlingMain'>
                <h1 className='mainPageHeadling'>Metro <i id='logoIcon' className="fas fa-motorcycle"></i> Motor</h1>
            </div>

            <div className='carouselMain'>
            {
            pic
            }
            </div>

            <div className="servicesDivHome">

                <div className="servicesSection">
                    <h2 className='servicesSecHead'>Home for riders</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, iusto aspernatur earum dolor sapiente tenetur amet officia necessitatibus consectetur aperiam voluptates delectus corrupti quos ea corporis laborum nostrum unde esse, exercitationem dicta eos. Obcaecati numquam veritatis quis quas debitis rerum eaque, quae laudantium adipisci quidem voluptatibus, fugiat et tempore dolor. Aliquid veniam, labore asperiores aspernatur corrupti inventore quas. Ex, impedit! Eum velit illo praesentium asperiores saepe. Explicabo vitae tempore maxime possimus, aut pariatur consequuntur, corporis quam debitis fugit cumque adipisci quasi odio reprehenderit temporibus incidunt in, perspiciatis dolor repellat perferendis. Exercitationem numquam nihil a, eveniet in esse ab recusandae amet.</p>
                </div>

                <div className="servicesSection">
                    <h2 className='servicesSecHead'>Everything you need in one place</h2>
                    <div className="homeList">
                        <ul className="servicesList">
                            <li className='homeListItem'>Motorcycles</li>
                            <li className='homeListItem'>Scooters</li>
                            <li className='homeListItem'>Riding gear</li>
                        </ul>
                        <ul className="servicesList">
                            <li className='homeListItem'>Garage</li>
                            <li className='homeListItem'>Transportation</li>
                            <li className='homeListItem'>Consulting</li>
                        </ul>
                    </div>
                </div>

                <div className="servicesSection">
                    <h2 className='servicesSecHead'>Best deals</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore autem ad voluptate veritatis totam? Obcaecati blanditiis eveniet sint possimus illo. Facilis culpa nesciunt molestias debitis, veritatis omnis asperiores, laudantium aut esse laboriosam non laborum? Repellat!</p>
                </div>

            </div>
            

        </div>
         );
    }
 
export default Home;