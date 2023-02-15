import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import PlantCard from "../../components/plantCard";

const PlantDetail = () => {
    const [prod, setProd] = useState({});

    let { id } = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => setProd(response.prods));  
    }, [id]);

    return (
        <div>
            <div className="plantDetailDiv">
                <PlantCard prods={prod} />
            </div>
        </div>
        
    );
};

export default PlantDetail;