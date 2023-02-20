import React from "react";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import AllProductsDisplay from "./AllProductsDisp";

const allProUrl = "https://winkart.onrender.com/catAllProd/"
const AllProducts=()=>{
    let params = useParams();
   
    let allUrl =`${allProUrl}${params.catId}`
   
    const [allProdlist, setAllPro] = useState()

    useEffect(()=>{
        fetch(allUrl,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            setAllPro(data)
        })
    })


    const allproductHead = (productslist) => {
        if (allProdlist) {
            return allProdlist[0]['category_name']
        }

    }

    return (
        <div>

            <div className='container mt-4 mb-4'>
                <h2 className='text-center'>Buy {allproductHead(allProdlist)} Now!</h2>
            </div>

            <div className='proListMain'>
                <AllProductsDisplay allProList={allProdlist}  />
            </div>

        </div>
    )

}

export default AllProducts;