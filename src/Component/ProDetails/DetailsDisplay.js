import React from "react";
import './DetailsDisplay.css'
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
const catUrl = "https://winkart.onrender.com/category"
const DetailsDisplay = (props) => {



    const RenderTab = (subTab) => {
        if (subTab) {
            return (
                <div>
                    {subTab.map((item) => {
                        return (
                            <div className="proAligns">
                                <li className="nav-item">

                                    <Link to={`/allProd/${item.category_id}`} className="nav-link active" aria-current="page" href="#">{item.category}</Link>

                                </li>
                            </div>



                        )
                    })}
                </div>
            )
        }

    }

    const RenderSubTab = () => {
        const [subTab, setSubTab] = useState();
        useEffect(() => {
            fetch(catUrl, { method: 'GET' })
                .then((res) => res.json())
                .then((data) => {
                    setSubTab(data)
                })
        })

        return (
            <div>
                <ul className="nav mt-2 justify-content-center">
                    {RenderTab(subTab)}
                </ul>
                <hr/>
            </div>
        )
    }



    const renderDetails = ({ passDetails }) => {
        if (passDetails) {
            return (
                <div className="detailsMain">

                    <div className="row">
                        <div className="detailsImg container col-lg-6">
                            <img src={passDetails[0]['image']} />
                        </div>
                        <div className="col-lg-6">
                            <div className="container detailsInfo">
                                <h2 className="mt-3">{passDetails[0]['product_name']}</h2>
                                <p>{passDetails[0]['description']}</p>
                                <h4>Just Rs. {passDetails[0]['Price']}</h4>
                                <button className="btn btn-success mt-4">Buy Now {passDetails[0]['company']} {passDetails[0]['subCat_name']}</button>
                            </div>
                        </div>
                    </div>

                </div>
            )
        }
    }


    return (
        <div>
            {RenderSubTab()}
            {renderDetails(props)}
        </div>
    )
}


export default DetailsDisplay;