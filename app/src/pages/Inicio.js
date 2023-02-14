import React from 'react';

//COMPONENTS
import ItemListContainer from '../components/itemListContainer';
const Inicio = () => {
    return (
        <div>
            <h1> Inicio </h1>{" "}
            <ItemListContainer text={"¡Proximamente podrás ver todos nuestros productos!"}>
            </ItemListContainer>
        </div>
    );
};

export default Inicio;
