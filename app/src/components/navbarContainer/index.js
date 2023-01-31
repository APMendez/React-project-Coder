import React from 'react'
import './styles.css';

function NavbarContainer({logo, children}) {
    return (
    <nav className='navbar'>
        <p>{logo}</p> 
        {children}
    </nav>
    )
}

export default NavbarContainer