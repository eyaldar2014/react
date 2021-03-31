import react from "react";

const Input = (props) => {


    const input = react.useRef()
    console.log(input)

    react.useEffect(() => {
        input.current.focus()
    }, [])


    // const handleChnage =(e)=>{}`


    return <>

        <input ref={input} type={'text'}/>
    </>
}

export default Input