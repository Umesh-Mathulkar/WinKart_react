import React, { Component } from "react";
import './SubCat.css'

const mobileUrl = "https://winkart.onrender.com/catProd/1";
const electUrl = "https://winkart.onrender.com/catProd/2";
const fasUrl = "https://winkart.onrender.com/catProd/3";
const applUrl = "https://winkart.onrender.com/catProd/4";
const beautyUrl = "https://winkart.onrender.com/catProd/5";



class SubCat extends Component {
    constructor(props) {
        super(props)

        this.state = {
            mobile: '',
            elect: '',
            fas: '',
            appl: '',
            beauty: ''
        }
    }

    renderMobile = (data) => {
        if (data) {
            console.log(data)
            return data.map((item) => {
                return (
                    <div className="cards offset-md-2">
                        <div className="proImg d-flex justify-content-center"><img src={item.image} /></div>
                        <h6 className="text-center">{item.subCat_name}</h6>
                    </div>
                )
            })
        }
    }

    renderElect = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <div className="cards">
                        <div className="proImg d-flex justify-content-center"><img src={item.image} /></div>
                        <h6 className="text-center">{item.subCat_name}</h6>
                    </div>
                )
            })
        }
    }

    renderFas = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <div className="cards">
                        <div className="proImg d-flex justify-content-center"><img src={item.image} /></div>
                        <h6 className="text-center">{item.subCat_name}</h6>
                    </div>
                )
            })
        }
    }

    renderAppl = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <div className="cards">
                        <div className="proImg d-flex justify-content-center"><img src={item.image} /></div>
                        <h6 className="text-center">{item.subCat_name}</h6>
                    </div>
                )
            })
        }
    }

    renderBeauty = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <div className="cards">
                    <div className="proImg d-flex justify-content-center"><img src={item.image} /></div>
                    <h6 className="text-center">{item.subCat_name}</h6>
                </div>
                )
            })
        }
    }


    render() {
        return (
            <>
                <div className="subCategory">
                    <div className="row rows"><div className="subHead col-lg-2 justify-content-center d-flex"><h4>Mobiles and<br /> Accessories</h4></div><div className="col-lg-10 mx-auto"> {this.renderMobile(this.state.mobile)}</div></div>
                    <div className="row rows"><div className="subHead col-lg-2 justify-content-center d-flex"><h4>Electronics</h4></div><div className="col-lg-10"> {this.renderElect(this.state.elect)}</div></div>
                    <div className="row rows"><div className="subHead col-lg-2 justify-content-center d-flex"><h4>Appliances</h4></div><div className="col-lg-10"> {this.renderElect(this.state.appl)}</div></div>
                    <div className="row rows"><div className="subHead col-lg-2 justify-content-center d-flex"><h4>Fashion</h4></div><div className="col-lg-10"> {this.renderElect(this.state.fas)}</div></div>
                    <div className="row rows"><div className="subHead col-lg-2 justify-content-center d-flex"><h4>Beauty & more</h4></div><div className="col-lg-10"> {this.renderElect(this.state.beauty)}</div></div>
                </div>
            </>
        )
    }

    //api calling

    componentDidMount() {
        fetch(mobileUrl, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ mobile: data })
            })

        fetch(electUrl, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ elect: data })
            })
        fetch(fasUrl, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ fas: data })
            })
        fetch(beautyUrl, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ beauty: data })
            })
        fetch(applUrl, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ appl: data })
            })
    }


}

export default SubCat;