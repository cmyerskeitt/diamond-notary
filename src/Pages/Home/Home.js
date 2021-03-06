import React from "react"
import NSA_Badge from './nsa_member_badge.png'
import NSA_Trained_Badge from './nsa-trained-badge.png'
import './Home.css'
import Logo from './DiamondNotary.png'

function Home(){
    
     return (
       <>
        <h1 className='welcome'> Welcome to Diamond Notary DMV, LLC.</h1>
        <h2 className='info'> Notary and Loan Signing agent with over 10 years experience notarizing accounting, real estate and property management documents. My hopes are to showcase my reliability and attention to detail to make you a happy returning customer. 
        <br/> 
        <br/>
        <label className="info1">Call Me Today to Schedule Your Signing!
        <br/>
        (240)-424-9577
        </label>
        </h2>
        <h2 className='hours'> Hours of Operation <br></br>
          Monday-Friday: 3pm - 9pm <br></br>
          Saturday: 9 am - 9pm <br></br>
          Sunday: 9 am - 9 pm </h2>
        <img src={NSA_Badge} className='notaryBadge' alt='NSA Badge'/>
        <img src={Logo} className='logo' alt='Logo'/>
        <img src={NSA_Trained_Badge} className='trainedBadge' alt='NSA Trained Badge'/>
       
        <br></br>
       
      </> 
  );
}



export default Home 