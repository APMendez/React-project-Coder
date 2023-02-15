import React, { useEffect, useState } from 'react'
import './styles.css';
import PlantCard from '../plantCard'
import { Link } from "react-router-dom";

const ItemListContainer = () => {
    const [prods, setProds] = useState([]);

    useEffect (()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => setProds(json));
    },[])

    return (
    <main className='itemListContainer'>
        {prods.map((prod) => {
        return (
            <Link to={`/detail/${prod.id}`}>
                <PlantCard prods={prod} key={prod.id}/>
            </Link>
        
        )
        })}        
    </main>
    )
}

export default ItemListContainer