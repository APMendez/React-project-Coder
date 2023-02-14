import React from 'react';

//COMPONENTS
import ItemListContainer from '../components/itemListContainer';
const Home = () => {
    return (
        <div>
            <h1> Home </h1>{" "}
            <ItemListContainer text={"¡Proximamente podrás ver todos nuestros productos!"}>
            </ItemListContainer>
        </div>
    );
};

export default Home;
