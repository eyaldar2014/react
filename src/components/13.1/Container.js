// child to parent cheat-sheet :
//
// asPropVarToChild:: ' parentCallback = {this.elementCallBack} '
// asMethodInParentClass:: ' elementCallBack =(childData)=>{'function code here'} '
// this.props.parentCallback('data from child'); command to send data to parent
//

import react from "react";

import './style.css'
import Name from './Name'
import Data from "./Data";


class DataMassaging extends react.Component {

    constructor(props) {
        super();

        this.state = {
            data: [],
        }
    }

    receiveInfo = (data) => {
        this.setState({
            data: this.props
        })

        return true
    }

    
    
    getData = () => {
        return this.state.data
    }

    getNames = () => {

        console.log(this.state.data)
        const names = this.state.data.map(u => u.name)

        console.log(names)

        return names
    }

    getOldies = () => {
        let oldies = this.state.data.filter((u) => {
            let x = u.birthday.split('-')
            return parseInt(x[2]) < 1990
        })
        return this.setState({
            data: oldies
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        // this.getNames()
        if (this.state.data.length !== 2) {
            this.getOldies()
        }
        console.log(this.state)

        return false
    }


    render() {

        // console.log('[render]')
        console.log(this.state)


        return <>
            <Name name names={this.getNames()} />

        </>
    }

}


export default Data