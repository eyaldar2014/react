import react from 'react';
import './style.css'

const Container = () => {

    const [mainArray, resetArray] = react.useState(["one", "two", "three", "four", "five"])
    const [newArray, setArray] = react.useState([mainArray.map((o, index) => ({
        name: o,
        checked: false,
        id: index
    }))][0])

    function deleteItems() {
        let temp = newArray.filter(o => {
            return o.checked === false
        })

        return setArray(temp)
    }

    const resetItems = () => {
        setArray([mainArray.map((o, index) => ({name: o, checked: false, id: index}))][0])
    }

    const handleInput = (e) => {

        setArray(newArray.map((o) => {
            if ((o.id).toString() === e.target.id) {
                return {name: o.name, checked: e.target.checked, id: o.id}
            } else {
                return o
            }
        }))
    }


    return <>
        <button onClick={deleteItems}>delete</button>
        <button onClick={resetItems}>reset</button>


        <ul>
        {newArray.map((o) => {
            return <li>
                <input type={'checkbox'} name={o.name} checked={o.checked} key={o.id} id={o.id} onChange={handleInput}/>
                <label>{o.name}</label>
            </li>
        })}
        </ul>
    </>

}

export default Container