import react from 'react'

class Button extends react.Component {
    constructor(props) {
        super();
        this.state = {
            data: '',
        }
    }
    componentDidMount() {
        this.setState({
            data: this.props,
        })
    }


    render() {
    return <>
    <input type={"button"} value={this.state.data.name} className={'btn'} onClick={this.state.data.btnFunction}/>


    </>
 }
}



export default Button