import react from 'react';
import "./style.css"

class HideAndSeek extends react.Component {
    constructor(props) {
        super();

        this.state = {
            starter: true,
            thing: "box",
        }
    }

    showAndHide = () => {

        if (this.state.starter === true) {

            // console.log(this.state.starter)
            this.setState({thing: ""})
            this.setState({starter: false})
        } else {
            // console.log(this.state.starter)
            this.setState({thing: 'box'})
            this.setState({starter: true})
        }
    }

    render() {

        return <>
            <div className="container">
                <input type={"button"} value={"hide/show"} onClick={this.showAndHide}/>
                <div className={this.state.thing}></div>
            </div>


        </>
    }

}

export default HideAndSeek;