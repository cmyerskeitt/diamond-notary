import React from "react"
import Pricelist from "./Pricelist";
import Headshot from './Headshot1.jpg'
import './Home.css'

function Home(){
    
     return (
       <>
        <h1 className='welcome'> Welcome to Diamond Notary LLC.</h1>
        <img src={Headshot} className='headshot' alt='Headshot'/>
        <Pricelist/>  
      </> 
  );
}



export default Home 