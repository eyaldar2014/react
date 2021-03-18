import react from "react";

class Input extends react.Component {

    constructor(props) {
        super();

        this.state = {
            data: ''
        }
    }

    //after mounting
    componentDidMount() {
        console.log('[constructor]')

        //is necessary if there is props
        this.setState({
            data: this.props
        })
    }

    inputHandler=(e)=>{
        console.log(e.target.value)
        this.setState({
            [e.target.name] : e.target.value
        })
        this.props.currentInputValue(e.target.name , e.target.value)
    }


    render() {
        console.log('[render]')
        console.log(this.state)


        return <>
            <label>{this.state.data.inputName +" : "}</label>
            <input name={this.state.data.inputName} type={this.state.data.type} value={this.state.name} onChange={this.inputHandler}></input>
        </>
    }

}


export default Input