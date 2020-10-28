import React, {Component} from 'react'

class EyesOnMe extends Component {

    handleFocusOutput = () => console.log('Good!')
    handleBlurOutput = () => console.log('Hey! Eyes on me!')

    render() {
        return (
            <button onFocus={this.handleFocusOutput} onBlur={this.handleBlurOutput}/>
        )
    }
}

export default EyesOnMe