import React,{Component} from "react";
import CategoryBar from "./CategoryBar";
import Carousel from "./Carousel";
import SubCat from "./SubCat";


class Home extends Component{
    render(){
        return(
            <>
            <CategoryBar/>
            <Carousel/>
            <SubCat/>
            
            </>
        )
    }
}

export default Home;