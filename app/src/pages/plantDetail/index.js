import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import PlantCard from "../../components/plantCard";

const PlantDetail = () => {
    const [prod, setProd] = useState({});

    let { id } = useParams();

    useEffect(() => {
        const getData=async()=>{
            const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const dataJson = await data.json();
            setProd(dataJson);
        }
        getData(); 
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

