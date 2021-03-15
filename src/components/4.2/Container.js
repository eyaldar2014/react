import react from "react";

import Card from "./Card"
import './style.css'


const Cards = () => {

    return (<>
            {/*{console.log('a')}*/}
            <div id='mainCont'>
                <Card pic='img1 img' title="Lorem1" text="lorem lorem lorem " share='#' something="#"/>
                <Card pic='img2 img' title="Lorem2" text="lorem lorem lorem xx" share='#' something="#"/>
                <Card pic='img3 img' title="Lorem3" text="lorem lorem lorem yy" share='#' something="#"/>
            </div>


        </>

    )
}

export default Cards