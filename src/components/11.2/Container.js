// child to parent cheat-sheet :
//
// asPropVarToChild:: ' parentCallback = {this.elementCallBack} '
// asMethodInParentClass:: ' elementCallBack =(childData)=>{'function code here'} '
// this.props.parentCallback('data from child'); command to send data to parent
//

import react from 'react'
import './style.css'
import CheckBox from "./CheckBox";

class X extends react.Component {

    constructor(props) {
        super();

        this.state = {
            checkBoxes: [
                {label: 'number 1', checked: 'checked'},
                {label: 'number 2', checked: 'checked'},
                {label: 'number 3', checked: true},
                {label: 'number 4', checked: false},
                {label: 'number 5', checked: false},
                {label: 'number 6', checked: true},
                {label: 'number 7', checked: true},
                ]
        }
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

        return (this.state.checkBoxes.map((cb) => {
                return <>
                    <CheckBox defaultChecked={cb.checked}></CheckBox>
                    <label> {cb.label}</label>
                    <br/>
                </>

            })
        )
    }

}


export default X