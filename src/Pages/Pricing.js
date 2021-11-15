import React from "react"
import Pricelist from "./Pricelist"
import './Pricing.css'

class Pricing extends React.Component{
  
 render(){
     return (
       
        <div>
        <h1 className='priceheader'>Diamond Notary DMV Pricing </h1>
        <Pricelist/> 
            <div className="payment"> 
                Accepted Methods of Payment: <br></br>
                Cash, Venmo, Cashapp, and Zelle 
            </div>
        </div> 
        )
    }
}



export default Pricing