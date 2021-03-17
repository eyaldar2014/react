
// child to parent cheat-sheet :
//
// asPropVarToChild:: ' parentCallback = {this.elementCallBack} '
// asMethodInParentClass:: ' elementCallBack =(childData)=>{'function code here'} '
// this.props.parentCallback('data from child'); command to send data to parent
//


import react from "react";
import './style.css'

class X extends react.Component  {

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


    render() {
        console.log('[render]')
        console.log(this.state)


        return <>


        </>
    }

}


export default X