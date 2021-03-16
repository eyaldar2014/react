import react from "react";

class Spinner extends react.Component {

    constructor(props) {
        super();

        this.state = {}
    }

    componentDidMount() {
        console.log('[spinner constructor]')
    }


    render() {

        return <>

            <div className='coolest'></div>

        </>
    }

}


export default Spinner