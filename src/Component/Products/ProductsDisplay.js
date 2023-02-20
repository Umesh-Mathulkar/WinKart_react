import React from "react";
import { Link } from "react-router-dom";

import './ProductsDisplay.css'

const ProductsDisplay = (props) => {

    const renderProd = ({ ProList }) => {
        if (ProList) {
            return ProList.map((item) => {
                return (
                    <Link to={'/details'}>
                           <div className="container ProMain">
                        <div className="row">
                            <div className="ProDisImg col-lg-4 d-flex justify-content-center align-items-center">
                                <img src={item.image} />
                            </div>
                            <div className="col-lg-8 d-flex justify-content-center align-items-center">
                                <div>   <h4>{item.product_name}</h4></div>

                            </div>

                        </div>

                    </div></Link>
                )
            })
        }
    }



    return (

        <div className="container">

            {renderProd(props)}
        </div>
    )
}

export default ProductsDisplay;