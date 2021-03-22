import react from 'react'
import './style.css'

class Container extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: ''
        }

        this.textInput = react.createRef();
        this.textInput2 = react.createRef();
    }

    componentDidMount() {
        return this.focusTextInput()
    }

    focusTextInput = () => {
        return this.textInput.current.focus();
    }

    btnFunc=()=>{
        this.textInput.current.select()
        document.execCommand("copy")
    }

    btnFunc2=()=>{
        this.textInput2.current.select()
        document.execCommand("paste")
        this.setState({
            msg: 'chrome isn\'t compatible with paste command'
        })
    }

    render() {

        return <>
            <h1>Bla Bla Bla Bla Bla </h1>
            <br/>
            <input
                type="text"
                ref={this.textInput}
            />
            <br/>
            <input
                type="button"
                value={'copy'}
                className={'btn'}
                onClick={this.btnFunc}
            />
            <br/>

            <textarea
                className={'textArea'}
                value={this.state.msg}
                ref={this.textInput2}
            />

            <br/>
            <input
                type="button"
                value={'paste'}
                className={'btn'}
                onClick={this.btnFunc2}
            />
        </>
    }
}

export default Container