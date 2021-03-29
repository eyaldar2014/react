import react from 'react';
import './style.css'
import Item from './Item'


const Container = () => {

    const [mainArray, resetArray] = react.useState(["one", "two", "three", "four", "five"])
    const [newArray, setArray] = react.useState([mainArray.map((o, index) => ({
        name: o,
        checked: false,
        id: index
    }))][0])
    console.log(newArray)



    function info(id, data) {

        let temp = newArray.filter((o) => {
            return o.id === id
        })
        temp[0].checked = data

        console.log(newArray)
    }

    function deleteItems() {
        // console.log(newArray)

        let temp = newArray.filter(o => {
            return o.checked === false
        })
        console.log(newArray)
        return setArray(temp)
    }

    const resetItems = () => {
        setArray([mainArray.map((o, index) => ({name: o, checked: false, id: index}))][0])
    }


    let deploy = [...newArray]
    // console.log(newArray)
    return <>
        <button onClick={deleteItems}>delete</button>
        <button onClick={resetItems}>reset</button>
        <ul>
            {deploy.map((o) => {
                return <Item name={o.name} checked={o.checked} key={o.id} id={o.id} info={info}/>
            })}
        </ul>

    </>
}

export default Container