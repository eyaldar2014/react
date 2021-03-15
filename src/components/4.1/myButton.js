import react from 'react'

class MyButton extends react.Component {

    constructor(props) {
        super();
    }

    render() {
        return (<>
                <input type='button' className={this.props.design} value={this.props.text} />
            </>
        )
    }

}


export default MyButton