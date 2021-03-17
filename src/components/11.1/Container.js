import react from "react";
import "./style.css";

import Button from "./Button"

class X extends react.Component {

    constructor(props) {
        super();

        this.state = {
            data: "" ,
            try: ""
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

            <Button parentCallBack = {this.btnCallBack} color='red' ></Button>
            <Button parentCallBack = {this.btnCallBack} color='blue' ></Button>
            <Button parentCallBack = {this.btnCallBack} color='green' ></Button>

            <br/>

            <div>{this.state.try}</div>

            <h1>the color you clicked is : {this.state.data}</h1>
        </>
    }

}


export default X