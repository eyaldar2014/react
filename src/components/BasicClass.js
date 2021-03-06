// child to parent cheat-sheet :
//
// asPropVarToChild:: ' parentCallback = {this.elementCallBack} '
// asMethodInParentClass:: ' elementCallBack =(childData)=>{'function code here'} '
// this.props.parentCallback('data from child'); command to send data to parent
//

import react from "react";

//import './style.css'

class X extends react.Component {

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

    //before render
    async shouldComponentUpdate(nextProps, nextState, nextContext) {
        //better to make this comparison more efficient - "save" if unnecessary
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


        </>
    }

}


export default X