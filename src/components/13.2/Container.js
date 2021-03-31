import react from 'react';
import './style.css'

import API from './Api'
import Avatar from './Avatar'
let newArray = []

const Container = () => {

    const [content, setContent] = react.useState()
    const [display, setDisplay] = react.useState([])
    const [data, setData] = react.useState([])

    // console.log(data)
    react.useEffect(() => {
        tenTimes()
    }, [])
    const tenTimes=async()=>{
        let array = []
        for(let i =0 ; i<10; i++){
            array.push(callApi())
        }
        Promise.all(array);
    }
    const callApi = async () => {
        try {
            const result = await API.get()
            // console.log(result.data.results[0])

            newArray.push(result.data.results[0])
            // console.log(newArray)
            if(newArray.length === 10){
                setData(newArray)
                setDisplay(newArray)
            }
        } catch (error) {
            console.log(error)
        }
    }


    const handleChange =(e)=>{
        // console.log(e.target.value)
        setContent(e.target.value)

        let newArray = data.filter(x=> x.name.first.includes(e.target.value))
        console.log(newArray)
        setDisplay(newArray)
    }



    return <>
        <label for={'search'}>search here: </label>
        <input id={'search'} type={'text'} value={content} onChange={handleChange}/>

        {display.map((o, index)=>{
            return <Avatar
                key={index}
                name={o.name.first}
                gender={o.gender}
                img={o.picture.medium}
            />
        })}


    </>
}

export default Container