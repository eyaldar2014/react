import react from 'react';
import './style.css'
import Data from './Data'

const Container = (props) => {

    const [btn, changeBtn] = react.useState('display')
    const [content, setContent] = react.useState('')

    const displayFunc = () => {
        // console.log('display content')
        changeBtn('hide')
        setContent(<Data />)
    }

    const hideFunc = () => {
        // console.log('hide content')
        changeBtn('display')
        setContent('')

    }

    const handleClick = (e) => {

        switch (e.target.textContent) {
            case 'display':
                return (displayFunc())

                break;
            case 'hide':
                return (hideFunc())
                break;
            default:
                console.log('mistake')
        }
    }


    return <>
        <button onClick={handleClick}>{btn}</button>
        <div>{content}</div>


    </>
}

export default Container