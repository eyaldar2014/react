import react from 'react'
import './style.css'

class Container extends react.Component {
    constructor(props) {
        super(props);
        // create a ref to store the textInput DOM element
        this.textInput = react.createRef();
        this.textInput2 = react.createRef();
    }

    componentDidMount() {
        return this.focusTextInput()
    }

    focusTextInput = () => {
        // Explicitly focus the text input using the raw DOM API
        // Note: we're accessing "current" to get the DOM node

        return this.textInput2.current.focus();
        // return this.textInput.current.focus();
    }

    render() {
        // tell React that we want to associate the <input> ref
        // with the `textInput` that we created in the constructor
        return <>
            <input
                type="text"
                ref={this.textInput}
            />
            <input
                type="text"
                ref={this.textInput2}
            />
        </>
    }
}

export default Container