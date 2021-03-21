import react from 'react'

class Select extends react.Component {
    constructor(props) {
        super();

        this.state = {

            categories: ['cat'],
                // selectedCat: ''
        }
    }

    componentDidMount = async () => {
        this.setState({
            categories: this.props.categories
        })
    }

    async shouldComponentUpdate(nextProps, nextState, snapshot) {
        // console.log(nextProps)
        // console.log(this.props)
        if (nextProps.categories.length !== this.props.categories.length) {
            await this.setState({categories: nextProps.categories})
        }
    }

    handlerDropDown = (e) => {
        // this.setState({selectedCat: e.target.value})
        this.props.getCategory(e.target.value)
    }

    render() {

        // console.log(this.state.categories)
        return <>
            <select onChange={this.handlerDropDown}>
                {/*<option>All</option>*/}
                {
                    this.state.categories.map((c) => {
                        return <option>{c} </option>
                    })
                }
            </select>
        </>
    }
}


export default Select