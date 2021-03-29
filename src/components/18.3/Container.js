import react from 'react';
import './style.css'

const Container = () => {

    const [time, setTime] = react.useState(0)

    const handleInput = (e) => {
        switch (e.target.name) {
            case 'seconds':
                return setTime(e.target.value)
                break;
            case 'minutes':
                return setTime(e.target.value*60)
                break;
            case 'hours':
                return setTime(e.target.value*3600)
                break;
            default:
                console.log('mistake')
        }
    }

    return <>

        <input type={"number"} name={'seconds'} value={time} onChange={handleInput}/>
        <br/>
        <input type={"number"} name={'minutes'} value={time / 60} onChange={handleInput}/>
        <br/>
        <input type={"number"} name={'hours'} value={time / 3600} onChange={handleInput}/>


    </>
}

export default Container