import React, { useState, useEffect } from 'react'
import Menu from './Menu';
import {withRouter} from 'react-router-dom';

function Header({history}) {
    const [isOpen, setIsOpen] = useState(false);
    const [disable, setDisable] = useState(false);

    useEffect(() => {
        history.listen(() => setIsOpen(false))
    })

    const toggleMenu = () => {
        disableMenu();
        setIsOpen(!isOpen);
    }
    
    const disableMenu = () => {
        setDisable(!disable);
        setTimeout(() => {
            setDisable(false)
        }, 1200)
    }

    return (
        <>
            <div className='header'>
                <h1 className='header__title'>COURGE.</h1>
                <button
                    onClick={toggleMenu}
                    className='header__menu'
                    disabled={disable}
                >
                    {isOpen ? "close" : "menu"}
                </button>
            </div>
            <Menu isOpen={isOpen}/>
        </>
    )
}

export default withRouter(Header)
