import React, {Component} from "react"
// Code Keypad Component Here

class Keypad extends Component {

    handleInputPassword = () => console.log('Entering password...')

    render() {
        return(
        <input type="password" onKeyUp={this.handleInputPassword}/>
        )
    }
}

export default Keypad