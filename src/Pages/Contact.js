import React from "react"
import './Contact.css'

class Contact extends React.Component{
    constructor(){
        super()
        this.state ={
            name: '',
            email: '',
            message: ''
        }
    }
  
    handleNameChange = (e) => {
        this.setState({name: e.target.value})
    }

    handleEmailChange = (e) => {
        this.setState({email: e.target.value})
    }

    handleMessageChange = (e) => {
        this.setState({message: e.target.value})
    }

    handleSubmit = (e) => {
        alert('Your message was forwarded to Diamond Notary LLC. We will contact you within 2 business days!')
        e.preventDefault()
        console.log(this.state)
        

         
    }


    render(){
        return (
            <div>
                <h1 className='welcome'> Contact Diamond Notary DMV, LLC.</h1>
                <form id='contact-form' onSubmit={this.handleSubmit}>
                    <div>
                        <label> Name </label>
                        <br></br>
                        <input type="text" className='form-name' value={this.state.name} onChange={this.handleNameChange}/>
                    </div>
                    <br>
                    </br>
                    <div>
                        <label> Email Address </label>
                        <br></br>
                        <input type="email" className='form-email' value={this.state.email} onChange={this.handleEmailChange}/>
                    </div>
                    <br>
                    </br>
                    <div>
                        <label> Message </label>
                        <br></br>
                        <input type="textarea" className='form-message' value={this.state.message} onChange={this.handleMessageChange} />
                    </div>
                    <br>
                    </br>
                    <label> All inquiries are being forwarded to diamondnotarydmv@gmail.com </label>
                    <br/>
                    <button type='submit' className='form-submit'>Submit</button>
                </form>

            </div> 
    
        )
    }
}



export default Contact