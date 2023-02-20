import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import ProductsDisplay from './ProductsDisplay';

import './Products.css'
const subCatUrl = "https://winkart.onrender.com/subCat/"



const Products = () => {
    let params = useParams();
    let subUrl = `${subCatUrl}${params.subCatId}`
  
    const [productslist, setList] = useState()
  

    useEffect(() => {
        fetch(subUrl, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                setList(data)
            })
    }, [])


   

    const productHead = (productslist) => {
        if (productslist) {
            return productslist[0]['subCat_name']
        }

    }

    return (
        <div>

            <div className='container mt-4 mb-4'>
                <h2 className='text-center'>Buy {productHead(productslist)} Now!</h2>
            </div>

            <div className='proListMain'>
                <ProductsDisplay ProList={productslist}  />
            </div>
        
        </div>
    )
}



export default Products;