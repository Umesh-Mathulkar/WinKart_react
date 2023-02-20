import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home/Home";
import Products from "./Products/Products";
import Main from "./Main";
import AllProducts from "./Products/AllProducts";
import Details from "./ProDetails/Details";

const Routing = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>

                <Route path="/" element={<Main/>}>
                    <Route index element={<Home />} />
                    <Route path="products/:subCatId" element={<Products />} />
                    <Route path="allProd/:catId" element={<AllProducts/>}/>
                    <Route path="details/:prodId" element={<Details/>}/>
                </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Routing;