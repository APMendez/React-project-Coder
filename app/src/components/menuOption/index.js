import React from 'react'
import './styles.css'

function MenuOption({liName}) {
    return (
        <li className='menuOption'>
            <a href='#'>{liName}</a>
        </li>
    )
}

export default MenuOption