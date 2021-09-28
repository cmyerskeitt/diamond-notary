import React from "react"
import Pricelist from "./Pricelist";
import Headshot from './Headshot1.jpg'
import NSA_Badge from './nsa_member_badge.png'
import NSA_Trained_Badge from './nsa-trained-badge.png'
import './Home.css'

function Home(){
    
     return (
       <>
        <h1 className='welcome'> Welcome to Diamond Notary LLC.</h1>
        <img src={NSA_Badge} className='notaryBadge' alt='NSA Badge'/>
        <img src={Headshot} className='headshot' alt='Headshot'/>
        <img src={NSA_Trained_Badge} className='trainedBadge' alt='NSA Trained Badge'/>
        <br></br>
        <Pricelist/>  
      </> 
  );
}



export default Home 