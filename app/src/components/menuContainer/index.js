import React from 'react'
import './styles.css'

function MenuContainer({children}) {
    return (
        <div className='menuContainer'>
            <ul className='menuList'>
                {children}
            </ul>
        </div>
    )
}

export default MenuContainer