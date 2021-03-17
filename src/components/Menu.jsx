import React, {useEffect, useRef} from 'react'
import { Link } from 'react-router-dom';
import {openMenu, animateLinks} from '../animation';


function Menu({isOpen}) {
    const { showContainer, staggerAnimation, animateShowContainer, hideContainer, animateHideContainer } = openMenu;
    const { staggerLinks, animateText } = animateLinks;
    let container = useRef(null),
        containerSecondaryLayer = useRef(null),
        containerLayer = useRef(null),
        text = useRef(null),
        link1, link2, link3, link4 = useRef(null);

    useEffect(() => {
        if(isOpen){
            //Open menu
            showContainer(container);
            staggerAnimation(containerLayer, containerSecondaryLayer);
            animateShowContainer(containerLayer, containerSecondaryLayer);
            staggerLinks(link1, link2, link3, link4);
            animateText(text)
        } else {
            //Close menu
            hideContainer(container);
            animateHideContainer(containerLayer, containerSecondaryLayer);
        }
    }, [isOpen])

    return (
        <div ref={el => container=el} className='container'>
            <div ref={el => containerSecondaryLayer=el} className='container-layer-secondary-background'></div>
            <div ref={el => containerLayer=el} className='container-layer'>
                <div className='container__links'>
                    <ul>
                        <li>
                            <Link ref={el => link1=el} to='/'>courge.</Link>
                        </li>
                        <li>
                            <Link ref={el => link2=el} to='/solutions'>solutions</Link>
                        </li>
                        <li>
                            <Link ref={el => link3=el} to='/opportunities'>opportunities</Link>
                        </li>
                        <li>
                            <Link ref={el => link4=el} to='/contact-us'>contact us</Link>
                        </li>
                    </ul>
                    <div ref={el => text=el} className='container__links--text'>
                        <h1>Courage the Cowardly Dog</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quos quasi pariatur neque quis doloribus, minima reprehenderit maxime quae, accusamus dolore itaque provident sit tempora optio vel et nemo dolores!</p>
                    </div>
                </div>
                <article className='container__content'>
                    <h2>Recommended</h2>
                    <span>Samurai Jack</span>
                    <span>Marvelous Adventures of Flapjack</span>
                    <span>Ed, Edd n Eddy</span>
                    <span>Chowder</span>
                </article>
            </div>
        </div>
    )
}

export default Menu
