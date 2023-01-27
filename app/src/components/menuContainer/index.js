import React from 'react'

function MenuContainer({title, children}) {
    return (
        <div>
            <ul>
                <p>{title}</p>
                {children}
            </ul>
        </div>
    )
}

export default MenuContainer