import react from 'react';
import './style.css'

import Line from './Line'

const Container = () => {

    const [data, setData] = react.useState([
        {name: 'css', completed: true},
        {name: 'js', completed: true},
        {name: 'react', completed: false},
        {name: 'mongoDB', completed: false},
        {name: 'nodeJS', completed: false},
    ])



    const update=(val, index)=>{
        // console.log('data: ', index, val)
        
        const newArray = [...data]

        if (val === true){
            newArray[index].completed = false
        }
        else{newArray[index].completed = true}

        return setData(newArray)
    }


    return <>

        {data.map((sub, index) => {
            return <>
            <Line key={index} data={sub} index={index} updateFunc={update}/>
            <br/>
        </>
        })}

    </>
}

export default Container