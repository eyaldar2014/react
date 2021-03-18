// child to parent cheat-sheet :
//
// asPropVarToChild:: ' parentCallback = {this.elementCallBack} '
// asMethodInParentClass:: ' elementCallBack =(childData)=>{'function code here'} '
// this.props.parentCallback('data from child'); command to send data to parent
//

import react from "react";
import './style.css'

import Input from "./Inputs";
import SelectMenu from "./SelectMenu";

class Form extends react.Component {

    constructor(props) {
        super();

        this.state = {
            data: '',
            submitValue: 'continue',
            First_Name: '',
            Last_Name: '',
            Age: 1,
            age: ''
            // users : []
        }
    }

    getSelectValue = (childData) => {
        console.log(childData)
        this.setState({
            Age: childData
        })
    }

    getInputValue = (key, childData) => {
        console.log('the key is : ' ,key)

        this.setState({
            [key]: childData
        })
    }

    //can send this to a new "submit" component with '"review" component' as a child
    onsubmitFunc = (e) => {
        // console.log(e.target.value)
        if (e.target.value === 'continue') {
            e.preventDefault()
            this.setState({
                submitValue: 'send'
            })
            this.createReviewDiv()
        }
    }

    cancelSubmit = () => {
        this.setState({
            submitValue: 'continue',
            review: '',
            review2: '',
            review3: '',
            review4: ''
        })
    }

    //can send this to a new "review" component with '"submit" component' as a parent
    createReviewDiv = () => {
        this.setState({
            review: ('first name : ' + this.state.First_Name),
            review2: ('last name : ' + this.state.Last_Name),
            review3: ('input Age : ' + this.state.age),
            review4: ('Age : ' + this.state.Age)
    })
    }

    render() {
        console.log('[render]')
        console.log(this.state)


        return <>
            <h1>Form</h1>

            <form className={'formContainer'}>
                <Input type={'text'} inputName={"First_Name"} currentInputValue={this.getInputValue}></Input>
                <br/>
                <Input type={'text'} inputName={"Last_Name"} currentInputValue={this.getInputValue}></Input>
                <br/>
                <Input type={'number'} inputName={"age"} currentInputValue={this.getInputValue}></Input>
                <br/>
                <SelectMenu currentSelectValue={this.getSelectValue}></SelectMenu>
                <br/>
                <input type={'submit'} value={this.state.submitValue} onClick={this.onsubmitFunc}/>
                <input type={'button'} value={'cancel'} onClick={this.cancelSubmit}/>
                <br/>
                <div className={"review"}>
                    {this.state.review}
                    <br/>
                    {this.state.review2}
                    <br/>
                    {this.state.review3}
                    <br/>
                    {this.state.review4}
                </div>

            </form>
        </>
    }

}


export default Form