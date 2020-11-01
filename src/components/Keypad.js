// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component {
    constructor() {
        super()
    
        this.state = {
            onKeyUp: this.handleOnKeyUp
        }
    }
    
    handleOnKeyUp = (e) => {
        console.log('Entering password...')
    }
    render() {
        return (
            <div>
                <input type="password"  onKeyUp={this.handleOnKeyUp}/>
            </div>
        )
    }
}
export default Keypad
