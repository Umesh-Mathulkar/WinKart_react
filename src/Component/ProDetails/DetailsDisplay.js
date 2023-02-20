import React from "react";
import './DetailsDisplay.css'

const DetailsDisplay=(props)=>{


const renderDetails=({passDetails})=>{
    if(passDetails){
        return (
            <div className="detailsMain">
                <div className="row">
                    <div className="detailsImg col-lg-6">
                        <img src={passDetails[0]['image']}/>
                    </div>
                    <div className="col-lg-6">
                        <h2>{passDetails[0]['product_name']}</h2>
                        <p>{passDetails[0]['description']}</p>
                        <button className="btn btn-success mt-4">Buy Now {passDetails[0]['company']} {passDetails[0]['subCat_name']}</button>
                    </div>
                </div>
        
            </div>
        )
    }
}


    return(
        <div>
            {renderDetails(props)}
        </div>
    )
}


export default DetailsDisplay;