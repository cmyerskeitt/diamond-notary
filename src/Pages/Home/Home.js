import React from "react"
import Pricelist from "./Pricelist";
import Headshot from './Headshot1.jpg'

function Home(){
    
     return (
       <>
        <img src={Headshot} className='headshot' alt='Headshot'/>
        <Pricelist />  
      </> 
  );
}



export default Home 