import react from "react";


class Item extends react.Component {

    constructor(props) {
        super();

        this.state = {
            data : ''
        }
    }

    componentDidMount() {
        this.setState({
            data: this.props
        })
    }

    deleteFunc=(e)=>{

        // console.log(e.target)
        this.state.data.delete(this.state.data.id)
    }

    editNameFunc=()=>{
        this.state.data.editName(this.state.data.id, this.state.data.newName)
    }

    editImgFunc=(e)=>{
        // console.log(e.target)
        this.state.data.editImg(this.state.data.id, this.state.data.newImg)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log(this.props)
        // console.log(prevProps)
        if(this.props !== prevProps){
            this.setState({
                data: this.props
            })
        }
    }

    render() {
        // console.log('[render]')
        // console.log(this.state)


        return <>
            <div className={'item'}>
                <h1>{this.state.data.name}</h1>
                <div className={"img"} style={{background: 'url('+ this.state.data.img +') no-repeat center center/cover'}}></div>
                <button onClick={this.deleteFunc}>delete</button>
                <button onClick={this.editNameFunc}>edit name</button>
                <button onClick={this.editImgFunc}>edit img</button>
            </div>

        </>
    }

}


export default Item