import React from 'react'
import './styles.css';

function ItemListContainer({text}) {
    return (
    <main className='itemListContainer'>
        {text}
    </main>
    )
}

export default ItemListContainer