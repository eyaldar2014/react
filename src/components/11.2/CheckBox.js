import react from "react";


class CheckBox extends react.Component {

    constructor(props) {
        super();

        this.state = {
            data: '',
        }
    }

    //after mounting
    componentDidMount() {
        console.log('[constructor]')
        this.setState({
            data: this.props
        })
    }

    //before render
    async shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.props !== nextProps) {
            await this.setState({
                data: this.props
            })
            console.log('render is done')
            return true
        }
        console.log('render is false')
        return false
    }

    //after render
    componentDidUpdate() {
        console.log('[componentDidUpdate]')
    }


    render() {

        console.log('[render]')
        console.log(this.state)


        return <>
            <input type='checkbox' defaultChecked={this.state.data.defaultChecked}></input>
        </>
    }

}


export default CheckBox