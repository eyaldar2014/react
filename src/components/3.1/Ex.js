import React from 'react'


const border = 'solid 1px black'

const Boxes = () => {
    return (

        <div className={"big"} style={{backgroundColor: "blue", border: {border}, width: '100px', height: "100px", position: 'relative'}}>

            <div className={"medium"}
                 style={{backgroundColor: "white", border: {border}, width: '90px', height: "90px", position: 'absolute' , left:'5px', top:'5px'}}>
                <div className={"small"}
                     style={{backgroundColor: "red", border: {border}, width: '70px', height: "70px", position: 'absolute' , left:'10px', top:'10px'}}>

                    <div className= "innerContainer" style={{ position: 'absolute' , left:'5px', top:'2.5px'}}>

                        <div className={"inner"}
                             style={{backgroundColor: "brown", border: {border}, width: '60px', height: "30px" ,marginBottom:'5px' }}></div>
                        <div className={"inner"}
                             style={{backgroundColor: "brown", border: {border}, width: '60px', height: "30px"}}></div>


                    </div>
                </div>
            </div>

        </div>


    )
}


export default Boxes