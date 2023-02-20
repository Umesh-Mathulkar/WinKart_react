import React from "react";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import DetailsDisplay from "./DetailsDisplay";
const detailsUrl = "https://winkart.onrender.com/product/"

const Details=()=>{
    let params = useParams();
    let detailUrl = `${detailsUrl}${params.prodId}`

 const [Details,setDetails] = useState();
    
    useEffect(()=>{
        fetch(detailUrl,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            setDetails(data)
        })
    },[])

    return(
        <div>
           <div></div>
           <DetailsDisplay passDetails={Details}/>
        </div>
    )
}

export default Details;