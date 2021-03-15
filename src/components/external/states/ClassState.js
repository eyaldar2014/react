import react from 'react';

class ClassState extends react.Component {
    constructor(props) {
        super();

        this.state = {
            name: '',
            age :0
        }

    }

    changeText = (e) => {
         this.setState({name : e.target.value})
        console.log(e.target.value)
    }


    changeAge = (e) => {
        this.setState({age : e.target.value})
        console.log(e.target.value)
    }

    btnClick = ()=>{
        console.log(this.state)
    }

    render() {
        return <>
            <input type="text" name="name" value={this.state.name} onChange={this.changeText}/>
            <br/>
            <input type="text" name="age" value={this.state.age} onChange={this.changeAge}/>
            <br/>
            <input type={"button"} value={"click"} onClick={this.btnClick}/>
        </>
    }

}

export default ClassState;
