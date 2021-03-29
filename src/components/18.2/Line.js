import react from 'react';


const Line = (props) => {

    const [data, setData] = react.useState(props)
    let val
    let span

    const sendDetail = () => {
        return data.updateFunc(data.data.completed, data.index)
    }

    if (data.data.completed === true) {
        val = String.fromCharCode(10004)
        span = <spans><s>{data.data.name}</s></spans>
    } else {
        span = <spans>{data.data.name}</spans>
        val = String.fromCharCode(10006)
    }


    return <>
        <div id={data.index}>
            {span}
            <button className={'btn'} onClick={sendDetail}>{val}</button>
        </div>
    </>
}

export default Line