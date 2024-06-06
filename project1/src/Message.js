import { Component, useState } from "react";

class Message extends Component{
    constructor(){
        super()
        this.state={
            message: "Hola new user"
        }
    }
    changeMessage(){
        this.setState({
            message:"Thanks for the sub bruh"
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}
export default Message;