// child to parent cheat-sheet :
//
// asPropVarToChild:: ' parentCallback = {this.elementCallBack} '
// asMethodInParentClass:: ' elementCallBack =(childData)=>{'function code here'} '
// this.props.parentCallback('data from child'); command to send data to parent
//

import react from "react";

class GameContainer extends react.Component {

    constructor(props) {
        super();

        this.state = {
            // data: ''
        }
    }

    //after mounting
    // componentDidMount() {
    //     console.log('[constructor]')
    //
    //     //is necessary if there is props
    //     this.setState({
    //         data: this.props
    //     })
    // }


    render() {
        console.log('[Game render]')
        console.log(this.state)


        return <>


        </>
    }

}


export default GameContainer