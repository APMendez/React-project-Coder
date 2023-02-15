import React from "react"
import "./styles.css";
import image from "../../img/begonia-maculata.jpg.webp"
const PlantCard = ({prods}) => {
    return(
        <div className="plantCardDiv">
            <img src={image} alt="imagen descriptiva" />
            <h1><span>Nombre: </span>{prods.title}</h1>
        </div>
    );
};
export default PlantCard;