import React, { useEffect } from 'react'
import './styles.css';
import PlantCard from '../plantCard'

const ItemListContainer = ({text}) => {
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd1ded9c88bmsh5315112a580943ep189973jsn1d3d790849a1',
        'X-RapidAPI-Host': 'house-plants.p.rapidapi.com'
    }
};
    useEffect (()=> {
        
        fetch('https://house-plants.p.rapidapi.com/all', options)
	    .then(response => response.json())
	    .then(response => console.log(response))
	    .catch(err => console.error(err));},[])
    return (
    <main className='itemListContainer'>
        {text}
        {/* {options.map((option) => {
        return <CardComponent options={option} key={option.id} />;
        })} */}
        <PlantCard>

        </PlantCard>
    </main>
    )
}

export default ItemListContainer