import react from "react";
import "./style.css"

class X extends react.Component {

    constructor(props) {
        super();

        this.state = {
            current: "in",
        }
    }

    componentDidMount() {
        console.log('[constructor]')

        setTimeout(this.myFunc, 4000)


    }

    componentDidUpdate() {
        console.log('[render]')
        console.log(this.state)
    }

    myFunc=()=>{
        setTimeout(this.setState({
            current : "out"
        }), 4000)
    }

    render() {



        return <>
            <div className={'box ' + this.props.specifc + this.state.current}> </div>

        </>
    }

}


export default X




