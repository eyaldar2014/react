import react from "react";

class Button extends react.Component {

    constructor(props) {
        super();

        this.state = {}
    }

    componentDidMount() {
        console.log('[Button constructor]')
    }

    componentDidUpdate() {
        console.log('[Button componentDidUpdate]')
    }

    btnFunc = (e) => {
        console.log("clicked")
        this.props.parentCallBack(e.target.value);
    }

    render() {
        console.log('[Button render]')
        console.log(this.state)

        return (

            <input type='button' className={'btn' +" "+ this.props.color} value={this.props.color} onClick={this.btnFunc}></input>

        )
    }

}


export default Button