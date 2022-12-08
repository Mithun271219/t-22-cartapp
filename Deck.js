import React from "react";
import Asigncard  from "./Carding";

class App extends React.Component{
    constructor(){
        super()
        this.state={
            carddetails:[]
        }
    }

    componentDidMount(){
        this.setState(this.state.carddetails=[
            {product:'iphone', price:'$40.00 - $80.00',id:1,img:"images/iphone.jpg" ,rating:3},
            {product:'airpods', price:'$20.00 - $18.00',id:2,img:'images/download.jpg',rating:4},
            {product:'ipad', price:'$50.00 - $25.00',id:5,img:'images/ipad.jpg',rating:4},
            {product:'airpodspro', price:'$50.00 - $25.00',id:3,img:'images/airpodspro.jpg',rating:4},
            {product:'watch (black)', price:'$40.00',id:4,img:'images/watch.jpg',rating:2},
            {product:'apple tv', price:'$120.00 - $280.00',id:6,img:'images/itv.jpg',rating:5},
            {product:'imac', price:'$20.00 - $18.00',id:7,img:'images/imac.jpg',rating:1},
            {product:'watch (white)', price:'$40.00',id:8,img:'images/watchpro.jpg',rating:3}
        ])
    }

    render(){
        return(
            <>
                {this.state.carddetails.map((p)=>{
                    return(
                        <Asigncard key={p.id} {...p}/>
                    )
                })}
            </>
        )
    }
}

export default App;