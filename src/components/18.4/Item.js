import react from 'react';

const Item = (props) => {

    const [data, setData] = react.useState(props)
    const [checked, setChecked] = react.useState(props.checked)
    // console.log(data)

    const handleInput=(e)=>{
        setChecked(e.target.checked)
        data.info(data.id, e.target.checked)
    }

    // console.log('here')
    return <>
        <li>
            <input type={'checkbox'} name={data.name} id={data.id} checked={checked} onChange={handleInput}/>
            <label>{data.name}</label>
        </li>
    </>
}

export default Item