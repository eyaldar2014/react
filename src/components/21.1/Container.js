import react from 'react';
import Input from './Input';

const Container = (props) => {


    const [btn, setBtn] = react.useState('edit')
    const [content, setContent] = react.useState('')




    // react.useEffect(() => {
    //
    // }, [])



    const handleClick =(e)=>{
        if(btn === 'edit'){
            setBtn('save')
            setContent(<Input />)
        }
        else{
            setBtn('edit')
            setContent('')
        }

    }


    return <>

        <div>{content}</div>
        <button onClick={handleClick}>{btn}</button>

    </>
}

export default Container