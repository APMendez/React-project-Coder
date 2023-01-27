import React from 'react'

function NavbarContainer({img, children}) {
    return (
    <nav>
        <p>{img}</p> 
        {children}
    </nav>
    )
}

export default NavbarContainer