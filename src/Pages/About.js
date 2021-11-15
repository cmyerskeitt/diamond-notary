import React from "react"
import Headshot from './Headshot1.jpg'
import './About.css'

class About extends React.Component{
  
 render(){
     return (
       
        <div>
            <h1 className="welcome"> Meet Your Notary Specialist</h1>
            <img src={Headshot} className='headshot' alt='Headshot'/>
            <br></br>
            <section className='credentials'> 
                <h2> <center> Deyonna Roberts, CEO</center></h2>
                <br></br>
                <ul>
                    <li>Notary for over 7 years (MD)</li>
                    <li>Licensed Title Producer (MD- TIPIC)</li>
                    <li>Experience notarizing banking, real estate and property management documents</li>
                    <li>Successfully completed over 200 signings</li> 
                    <li>Insured: E&O of $50,000</li>
                    <li>Completely Background Screened</li>
                    <li>Local, Black Woman Owned Business</li>
                </ul>
            </section>
        </div> 
    
        )
    }
}



export default About