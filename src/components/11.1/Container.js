import react from "react";
import "./style.css";

import Button from "./Button"

class X extends react.Component {

    constructor(props) {
        super();

        this.state = {
            data: ""
        }
    }

    btnCallBack =(childData)=>{
        this.setState({
            data : childData
        })
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

            <Button parentCallback = {this.btnCallBack} value='hello' color='red'></Button>
            <Button parentCallback = {this.btnCallBack} value='hello' color='blue'></Button>
            <Button parentCallback = {this.btnCallBack} value='hello' color='green'></Button>

            <br/>

            <h1>the color you clicked is : {this.state.data}</h1>
        </>
    }

}


export default X