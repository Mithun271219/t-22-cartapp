import React from "react";

class Removefromcart extends React.Component{
    constructor(itmincrt){
        super(itmincrt)
            this.state={
                itmincrt:false,
                cartcount:0
            }
    }

    editCart=()=>{
        this.setState({
            itmincrt: !this.state.itmincrt
        })
    }

    render(){
        return(
            this.state.itmincrt ?
            (<button className="btn btn-danger" onClick={this.editCart} >Remove from cart</button>) :
            (<button className="btn btn-primary" onClick={this.editCart} >Add to cart</button>)
        )
    }
}

export default Removefromcart;