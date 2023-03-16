import React from "react";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import DetailsDisplay from "./DetailsDisplay";
import Nav from "../Nav";
const detailsUrl = "https://winkart.onrender.com/product/"

const Details=()=>{
    let params = useParams();
    let detailUrl = `${detailsUrl}${params.prodId}`
    sessionStorage.setItem('prodId',params.prodId)
 const [Details,setDetails] = useState();
    
    useEffect(()=>{
        fetch(detailUrl,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            setDetails(data)
        })
    },[])

    return( <><Nav/>
        <div>
           <div></div>
           <DetailsDisplay passDetails={Details}/>
        </div>
        </>
    )
}

export default Details;