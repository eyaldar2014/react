import react from "react";
import "./style.css"

import Spinner from "./SpinnerA"
import SpinnerB from "./SpinnerB"
import SpinnerC from "./SpinnerC"

class X extends react.Component {

    constructor(props) {
        super();

        this.state = {}
    }

    async componentDidMount() {

        this.createRandom()
        await this.delayStart()
        console.log('[container constructor]')
    }

    delayStart() {
        console.log('start')
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this.setState({
                    current: ''
                }));
            }, 3000);
        });
    }

    createRandom() {

        const loto = Math.random()
        console.log(loto)

        //can I make it a switch??
        if (loto > 0.8) {
            this.setState({
                current: <Spinner/>
            })
        } else if (loto < 0.4) {
            this.setState({
                current: <SpinnerB/>
            })
        } else {
            this.setState({
                current: <SpinnerC/>
            })
        }
    }


    render() {




        return <>

            <div id="loader">{this.state.current}</div>

        </>
    }

}


export default X