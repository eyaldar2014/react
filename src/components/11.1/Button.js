import react from "react";

class Button extends react.Component {

    constructor(props) {
        super();

        this.state = {}
    }

    componentDidMount() {
        console.log('[constructor]')
    }

    componentDidUpdate() {
        console.log('[componentDidUpdate]')
    }

    btnFunc = (e) => {
        console.log("clicked")
        this.props.parentCallback(e.target.value);
    }

    render() {
        console.log('[render]')
        console.log(this.state)


        return (

            <input type='button' className={'btn' +" "+ this.props.color} value={this.props.color} onClick={this.btnFunc}></input>

        )
    }

}


export default Button