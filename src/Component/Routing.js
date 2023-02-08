import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home/Home";

const Routing=()=>{
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
        
        </Routes>
        <Footer/>
        </BrowserRouter>
    )
}

export default Routing;