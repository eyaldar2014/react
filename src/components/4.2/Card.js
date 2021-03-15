import react from 'react'

class Card extends react.Component {

    constructor(props) {
        super();
    }

    render() {
        return (<>
                <div className='piece'>
                    <div className='cardContainer'>
                        <div className={this.props.pic}></div>
                        <h2>{this.props.title}</h2>
                        <p>{this.props.text} </p>
                        <a href={this.props.share}>share</a>
                        <br/>
                        <a href={this.props.something}>some..</a>

                    </div>
                </div>
            </>
        )
    }

}


export default Card