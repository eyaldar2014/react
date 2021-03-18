import react from "react";

class SelectMenu extends react.Component {

    constructor(props) {
        super();

        this.state = {
            data: ''
        }
    }

    //after mounting
    componentDidMount() {
        console.log('[constructor]')

        //is necessary if there is props
        this.setState({
            data: this.props
        })
    }

    //before render
    async shouldComponentUpdate(nextProps, nextState, nextContext) {
        //better to make this comparison more efficient - "save" if unnecessary
        if (this.props !== nextProps) {
            await this.setState({
                data: this.props
            })
            console.log('render is done')
            return true
        }
        console.log('render is false')
        return false
    }

    // inputHandler=(e)=>{
    //     console.log(e.target.value)
    //     this.setState({
    //         [e.target.name] : e.target.value
    //     })
    // }

    selectValue=(e)=>{
        // console.log(e.target.value)
        this.setState({
            [e.target.name] : e.target.value
        })
        this.props.currentSelectValue(e.target.value)
    }

    createOptions=()=>{
        let options = []

        for (let i = 1; i < 100 ; i++){

        options.push(<option value={i}>{i}</option>)
        }

        console.log(options)
        return options
    }

    render() {
        console.log('[render]')
        console.log(this.state)


        return <>
            <select name="selectMenu" onChange={this.selectValue} >{this.createOptions()}</select>
        </>
    }

}


export default SelectMenu