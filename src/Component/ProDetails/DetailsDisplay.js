import React from "react";
import './DetailsDisplay.css'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatchCart, useCart } from "../ContextReducer";




const catUrl = "https://winkart.onrender.com/category"



const DetailsDisplay = (props) => {
    const[qty,setQty]=useState(1);
    
    let dispatch = useDispatchCart();
    let orderData = useCart();


    const handleAddToCart = async (arrays) => {
       
        await dispatch({ type: "ADD", id: arrays.product_id, name: arrays.product_name, price: arrays.Price, image: arrays.image, Qty:qty })

        document.getElementById("buy").innerText = ``
        document.getElementById("buyMain").innerHTML = `<Button className="btn btn-success" disabled>added to cart</button`
    }







    //  render Subtab
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
    //  render Subtab end


    // api call for subTab

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
                <hr />
            </div>
        )
    }
    // api call for subTan end

    // add to cart
    const handleQty=(event)=>{
         setQty(event.target.value)
            
        
    }



    // add to cart end



    // main details Render
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
                                <h4>Just Rs. {passDetails[0]['Price'].toLocaleString()}</h4>
                                <form>
                                    <label style={{color:"red"}} for="qty">Please Select Quantity :</label>
                                    <select id="qty" onChange={(e)=>{handleQty(e)}}>
                                        
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                        <option value={6}>6</option>
                                        <option value={7}>7</option>
                                        <option value={8}>8</option>
                                        <option value={9}>9</option>
                                        <option value={10}>10</option>
                                        <option value={11}>11</option>
                                        <option value={12}>12</option>
                                        <option value={13}>13</option>
                                    </select>
                                    <div id="buyMain"> <button id="buy" type="submit" onClick={() => { handleAddToCart(passDetails[0]) }} className="btn btn-success mt-4">Buy Now {passDetails[0]['company']} {passDetails[0]['subCat_name']}</button></div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            )
        }
    }
    // main details Render end

    // return function
    return (
        <div>
            {RenderSubTab()}
            {renderDetails(props)}
        </div>
    )
}


export default DetailsDisplay;