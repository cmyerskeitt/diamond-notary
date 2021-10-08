import React from "react"
import NSA_Badge from './nsa_member_badge.png'
import NSA_Trained_Badge from './nsa-trained-badge.png'
import './Home.css'
import Logo from './DiamondNotary.png'

function Home(){
    
     return (
       <>
        <h1 className='welcome'> Welcome to Diamond Notary DMV, LLC.</h1>
        <h2 className='info'>Notary and Loan Signing agent with over 10 years experience notarizing accounting, real estate and property management documents. My hopes is to showcase my reliability and attention to detail to make you a return and happy customer. Call me today to schedule your signing</h2>
        <img src={NSA_Badge} className='notaryBadge' alt='NSA Badge'/>
        <img src={Logo} className='logo' alt='Logo'/>
        <img src={NSA_Trained_Badge} className='trainedBadge' alt='NSA Trained Badge'/>
       
        <br></br>
       
      </> 
  );
}



export default Home 