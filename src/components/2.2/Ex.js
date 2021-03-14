import react from 'react'


const data = ["hello", "world"];
const n1 = 5
const n2 = 6
const string = "I love React!"



class Basic extends react.Component {

    constructor(props) {
        super();
    }

    render() {
        return(<div>
                {data.join(' ')}
                <br/>
                {(n1 + n2)}
                <br/>
                {'the string length is: ' + string.length}
            </div>
        )
    }
}

export default Basic