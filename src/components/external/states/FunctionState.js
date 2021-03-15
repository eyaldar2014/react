import react from 'react';

const FunctionState = () => {

    const [state,setState] = react.useState({
        name: '',
        age: '30'
    })


    const [users,setUsers] = react.useState([])

    const [user,setUser] = react.useState([])


    const textChage = (e) => {
        setState({
            name : e.target.value,
            age : state.age
        })
    }


    const ageChage = (e) => {
        setState({
            age : e.target.value,
            name : state.name,
        })
    }

    const clickEvent = ()=>{
        console.log(state)
    }

    return <>
        <input type="text" name="name" value={state.name} onChange={textChage}/>
        <br/>
        <input type="text" name="age" value={state.age} onChange={(e)=>{ageChage(e)}}/>
        <br/>
        <input type={"button"} value={"click"} onClick={clickEvent}/>
    </>
}

export default FunctionState;
