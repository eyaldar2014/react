// child to parent cheat-sheet :
//
// asPropVarToChild:: ' parentCallback = {this.elementCallBack} '
// asMethodInParentClass:: ' elementCallBack =(childData)=>{'function code here'} '
// this.props.parentCallback('data from child'); command to send data to parent
//

import react from "react";

//import './style.css'

class Name extends react.Component {

    constructor(props) {
        super();

        this.state = {
            data: ''
        }
    }

async componentDidMount() {
        console.log(this.props)
        await this.setState({
            data: this.props.names
        })
}

    render() {
        // console.log('[render]')
        console.log(this.state)


        return <>
            {/*{this.state}*/}

        </>
    }

}


export default Name