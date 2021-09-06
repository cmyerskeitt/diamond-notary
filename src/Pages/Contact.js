import React from "react"

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


    render(){
        return (
            <div>
                <form id='contact-form'>
                    <div>
                        <label> Name </label>
                        <input type="text" value={this.state.name} onChange={this.handleNameChange}/>
                    </div>
                    <br>
                    </br>
                    <div>
                        <label> Email Address </label>
                        <input type="email" value={this.state.email} onChange={this.handleEmailChange}/>
                    </div>
                    <br>
                    </br>
                    <div>
                        <label> Message </label>
                        <input type="textarea" value={this.state.message} onChange={this.handleMessageChange} />
                    </div>
                    <br>
                    </br>
                    <button type='submit'>Submit</button>
                </form>

            </div> 
    
        )
    }
}



export default Contact