import react from "react";
import "./style.css";

import Button from "./Button"


class X extends react.Component {

    constructor(props) {
        super();

        this.state = {
            data: "",
            try: "",
            colors: ['red', 'blue', 'green']

        }
    }

    btnCallBack = (childData) => {
        this.setState({
            data: childData
        })
    }

    componentDidMount()
    {
        console.log('[constructor]')
    }
    componentDidUpdate()
    {
        console.log('[componentDidUpdate]')
    }


    render() {
        console.log('[render]')
        console.log(this.state)


        return <>
            {
                this.state.colors.map((color) => {
                    return <Button parentCallBack={this.btnCallBack} color={color}></Button>
                })
            }

            <br/>

            <h1>the color you clicked is : {this.state.data}</h1>
        </>
    }

}

export default X