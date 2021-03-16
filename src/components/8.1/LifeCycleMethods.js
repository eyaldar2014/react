import react from "react";

class LifeCycleMethods extends react.Component {

    constructor(props) {
        super();

        this.thing = react.createRef()

        this.state = {
            favoriteColor: "blue"
        }
    }

    //

    componentDidMount() {
        console.log('[constructor]')

        setTimeout(() => {
            this.setState({
                    favoriteColor: "black"
                }
            )
        }, 1500)
    }

    componentDidUpdate() {
        console.log('[render]')
        console.log(this.state)

        console.log(this.thing)
        this.thing.current.innerHTML = "The updated favorite color is " + this.state.favoriteColor

    }


    render() {



        return <>
            <h1>my favorite color is {this.state.favoriteColor}</h1>
            <div id='thing' ref={this.thing}></div>


        </>
    }

}


export default LifeCycleMethods




