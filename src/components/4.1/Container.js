import react from "react";

import MyButton from './myButton'
import './style.css'


const Buttons = () => {

    return (<>
            <MyButton text = 'bold' design = 'bold'></MyButton>
            <MyButton text = 'not bold' design = 'notBold'></MyButton>
        </>

    )
}

export default Buttons