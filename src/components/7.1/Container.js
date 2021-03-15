import react from 'react';

class Task extends react.Component {
    constructor(props) {
        super();

        this.state = {
            counter: 0
        }

    }

    increaseCount = () => {

        let n  = this.state.counter
        n++
        this.setState({counter : n})

    }

    render() {

        let n = 0

        return <>
            <input type={"button"} value={"increment"} onClick={this.increaseCount}/>
            <div> {this.state.counter}</div>
            </>
    }

}

export default Task;