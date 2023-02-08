import React,{Component} from "react";
import './CategoryBar.css'
const catUrl = "http://localhost:7700/category"


class CategoryBar extends Component{
    constructor(props){
        super(props)

        this.state={
            categories:'',
          
        }

    }

    renderCategory = (data) =>{
        if(data){
            return data.map((item)=>{
                return(
                    <div className="card">
                        <div className="catImg d-flex justify-content-center"><img src={item.image} alt='catImg' /></div>
                        <h6 className="text-center">{item.category}</h6>
                    
                    </div>
                    
                )
            })
        }
    }

 


    render(){
        return(
            <>
                <div className="container d-flex justify-content-center mt-3">
                  
                  {this.renderCategory(this.state.categories)}

                </div>
            </>
        )
    }




    //api calling

    componentDidMount(){
        fetch(catUrl,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({categories:data})
        })
    }
}

export default CategoryBar;