import React from 'react'
import './styles.css'

function MenuOption({liName}) {
    return (
        <li className='menuOption'>
            {liName}
        </li>
    )
}

export default MenuOption