import react from 'react'

class RangeSlide extends react.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div>

                    <p>Custom range slider:</p>
                    <input type="range" min="1" max="100" className="slider" id="myRange"></input>
            </div>
    )
    }
    }



    export default RangeSlide

