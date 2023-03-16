import React from "react";
import { useEffect, useState } from "react";
import { useCart } from "../ContextReducer";
import './Orders.css'
import { useDispatchCart } from "../ContextReducer";
import Nav from "../Nav";

const Orders = () => {
    let dispatch = useDispatchCart();
    let orders = useCart();
    let totalPrice = 0;

   
    



    const renderTotal = (e) => {
        totalPrice = totalPrice + e;

    }
    const handleRemove=(ids)=>{
      
            dispatch({type:"REMOVE",index:ids})
        
       
        
    }

    const renderCart = () => {
        return orders.map((item ,index) => {
            return (
                <><div className="col-lg-4 col-md-6 d-flex justify-content-center">
                    <div className="card mt-2 mb-2 cartCard" style={{ width: '15rem' }}>
                        <div className="cartImg">
                            <img src={item.image} className="card-img-top" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p>Quantity {item.qty}</p>
                            <p style={{ color: 'red',display:'inline-block' }} className="card-text">{item.price.toLocaleString()} </p>&nbsp;
                            <p style={{ color: 'red',display:'inline-block' }}> X {item.qty}= Rs.{item.finalP.toLocaleString()}</p>
                            <button onClick={()=>{handleRemove(index)}}  className="btn btn-danger">Remove</button>
                        </div>
                    </div>
                </div>
                    {renderTotal(item.finalP)}
                </>
            )
        })

    }



    return (
        <><Nav/>
            <div className="row mt-3">
                <div className="col-lg-8"><div className="row">{renderCart()}</div></div>
                <div className="col-lg-4 place">
                    <h1 style={{ color: 'red' }}>Cart Total : <i className="fas fa-inr"></i> {totalPrice.toLocaleString()}</h1>
                    <div className="forms d-flex justify-content-center mb-4 mt-3">
                        <form className="row g-3 needs-validation">
                            <div className="col-md-6">
                                <label for="fname" className="form-label">First name</label>
                                <input type="text" className="form-control" id="fname"  required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label for="lname" className="form-label">Last name</label>
                                <input type="text" className="form-control" id="lname" required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <hr/>
                            <h4>Delivery Address</h4>
                            <div><input type="text" className="form-control" placeholder="please enter your address" required/></div>
                            <div className="col-md-6">
                                <label for="city" className="form-label">City</label>
                                <input type="text" className="form-control" id="city" required />
                                <div className="invalid-feedback">
                                    Please provide a valid city.
                                </div>
                            </div>
                            <div className="col-md-3">
                                <label for="state" className="form-label">State</label>
                                <input type="text" className="form-control" id="state" required />
                                <div className="invalid-feedback">
                                    Please select a valid state.
                                </div>
                            </div>
                            <div className="col-md-3">
                                <label for="zip" className="form-label">Zip</label>
                                <input type="text" className="form-control" id="zip" required />
                                <div className="invalid-feedback">
                                    Please provide a valid zip.
                                </div>
                            </div>
                           
                            <div className="col-12">
                                <button className="btn btn-warning" type="submit">Place Order & Pay Rs.{totalPrice.toLocaleString()}</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Orders;