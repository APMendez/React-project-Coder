import React from 'react'
import './styles.css'

function CartWidget({amount}) {
    return (
        <div className='cart'>
            {amount}
        </div>
    )
}

export default CartWidget