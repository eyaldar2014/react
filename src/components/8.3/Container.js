import react from "react";
import "./style.css"
import Box from './Box'

class X extends react.Component {

    constructor(props) {
        super();

        this.state = {}
    }

    componentDidMount() {
        console.log('[constructor]')
    }

    componentDidUpdate() {
        console.log('[render]')
        console.log(this.state)
    }


    render() {

        console.log('it works')


        return <>
            <Box specifc="box1 "/>
            <Box specifc="box2 "/>
            <Box specifc="box3 "/>

        </>
    }

}


export default X




