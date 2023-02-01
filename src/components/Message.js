import React, { Component } from 'react'

/**The class makes a click event on the button change the text the visitor recieves 
 * The text changes from "Welcome Visitor " to "Thank you for subscribing " once the button is clicked.
*/
class Message extends Component {

    // add a constructor to use a state.
    constructor() {
        super()
        this.state = {
            message: 'Welcome Visitor'
        }
    }

    changeMessage() {
        this.setState({
            message: 'Thank you for subscribing'
        })
    }
    render() {
        return (
            <div>
                <h1>
                    {this.state.message}
                </h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>

        )
    }
}
export default Message;