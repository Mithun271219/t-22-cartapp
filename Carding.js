import React from "react"; 
import Removefromcart from "./Removecart";
import Starrat from "./Starrating";

class Asigncard extends React.Component{
    constructor(itemincart){
        super(itemincart)
    }

    render(){
        return(    
            <div className="col">
                <div className="card h-100">
                    <div className="card-body">
                        <img src={this.props.img} className="card-img-top" alt="" ></img>
                        <h3>{this.props.product}</h3>
                        <p>{this.props.price} </p>
                        <p><Starrat /></p>
                        <div id="btn">
                            <Removefromcart />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Asigncard
