import react from "react";

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


        </>
    }

}


export default X