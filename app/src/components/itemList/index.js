import React from 'react'
import './styles.css';

function ItemList({text}) {
    return (
    <main className='itemList'>
        {text}
    </main>
    )
}

export default ItemList