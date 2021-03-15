import react from "react";

import Title from "./Title"
import RangeQuestion from "./RangeQuestion"
import RangeSlide from "./RangeSlider"
import InputQuestion from "./InputQuestion"
import Input from "./Input"
import './QuizStyle.css'


const Quiz = () => {
    return (
        <div className="container">
            <Title/>
            <RangeQuestion/>
            <RangeSlide/>
            <form>
                <InputQuestion/>
                <br/>
                <Input/>
            </form>
        </div>


    )
}


export default Quiz