import react from "react";

class CheckBox extends react.Component {

    constructor(props) {
        super();

        this.state = {
            data: ''
        }
    }

    componentDidMount() {
        console.log('[constructor]')

        this.setState({
            data: this.props
        })
    }

    componentDidUpdate() {
        console.log('[componentDidUpdate]')
    }


    render() {
        console.log('[render]')
        console.log(this.state)


        return <input type='checkbox' defaultChecked={this.state.data.defaultChecked}></input>
    }

}


export default CheckBox