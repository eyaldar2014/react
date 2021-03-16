import react from "react";

class x extends react.Component {

    constructor(props) {
        {
            console.log('[constructor]')
        }

        super();

        this.state = {}
    }


    render() {
        {
            console.log('[render]')
        }
        {
            console.log(this.state)
        }

        return <>


        </>
    }

}


export default x




