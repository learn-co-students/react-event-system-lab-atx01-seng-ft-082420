// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component {
    constructor() {
        super()
    
        this.state = {
             onFocus: this.handleOnFocus,
             onBlur: this.handleOnBlur
        }
    }

    handleOnFocus = (e) => {
        console.log('Good!')
    }

    handleOnBlur = (e) => {
        console.log('Hey! Eyes on me!')
    }
    
    render() {
        return (
            <div>
                <button onFocus={this.handleOnFocus} onBlur={this.handleOnBlur}>
                    Hey Look At Me!
                </button>
            </div>
        )
    }
}
export default EyesOnMe