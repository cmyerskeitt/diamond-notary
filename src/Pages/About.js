import React from "react"
import Headshot from './Headshot1.jpg'
import './About.css'

class About extends React.Component{
  
 render(){
     return (
       
        <div>
            <h1 className="welcome">About Deyonna Roberts!</h1>
            <img src={Headshot} className='headshot' alt='Headshot'/>
            <br></br>
            <section className='credentials'> 
                <h2> <center> Meet Your Notary Specialist</center></h2>
                <br></br>
                <ul>
                    <li>Notary for over 7 years ( MD)</li>
                    <li>Licensed Title Producer (MD- TIPIC)</li>
                    <li>Licensed Title Producer (MD- TIPIC)</li>
                    <li>5 years experience notarizing banking, real estate and property management documents.</li>
                    <li>Completed over 200 signings</li> 
                    <li>E&O insurance of 50,000</li>
                    <li>Background Check passed</li>
                    <li>Local Black Woman owned business</li>
                </ul>
            </section>
        </div> 
    
        )
    }
}



export default About