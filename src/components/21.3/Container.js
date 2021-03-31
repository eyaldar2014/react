import react from "react";
import './style.css'
import color from './color.jpg'
import black from './black.jpg'


const Container = () => {

    const [kind, setColor] = react.useState(color)

    react.useEffect(() => {

    }, [])

    const blackHandler = () => {
        console.log('black')
        setColor(black)
    }

    const colorHandler = () => {
        console.log('color')
        setColor(color)
    }

    return <>
        <img
            onMouseOver={blackHandler}
            onMouseLeave={colorHandler}
            className="img"
            src={kind}
        />


    </>
}

export default Container