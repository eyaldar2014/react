import react from "react";
import './style.css'

class BoxStyle extends react.Component {

    constructor(props) {

        super();

        this.state = {
            counter: 0,
            currentClass: "first ",

        }
    }

    componentDidMount() {
        console.log('[constructor]')
        setInterval(this.myFunction, 1500)
    }

    componentDidUpdate() {
        console.log('[render]')
        console.log(this.state)
    }


    myFunction = () => {
        console.log('start')

        if (this.state.currentClass === "first " || this.state.currentClass === "first circle") {

            this.setState({
                currentClass: "second ",
                counter: this.state.counter + 1
            })
        }

        else if (this.state.currentClass === "second " || this.state.currentClass === "second circle") {
            this.setState({
                currentClass: "first ",
                counter: this.state.counter + 1
            })
        }
        if(this.state.counter % 5 === 0){
            this.setState({
                currentClass : this.state.currentClass + "circle"
            })
        }

        console.log('end')
    }

    render() {

        return <>

            <div className={"box " + this.state.currentClass}></div>

        </>
    }

}


export default BoxStyle



