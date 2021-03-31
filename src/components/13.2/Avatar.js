import react from 'react'

const Avatar = (props) => {

    const [data,setData] = react.useState(props)

    react.useEffect(()=>{
        setData(props)
    },[props])

    return <div className={'avatar'}>
        <h1>{data.name}</h1>
        <h3>{data.gender}</h3>
        <img src={data.img}/>

    </div>
}
export default Avatar