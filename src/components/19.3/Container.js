import react from "react";
import axios from "axios";

const Container = () => {


    const [search, setSearch] = react.useState('hooks')
    const [data, setData] = react.useState([])
    const [errorIndeed, setError] = react.useState('')
    const [spinner, setSpinner] = react.useState('')


    const callApi = async () => {

        try {
            const result = await axios.get('https://hn.algolia.com/api/v1/search?query=' + search)
            // console.log(result.data)
            setData(result.data.hits)
            setError('')
        } catch (error) {
            // console.error(error)
            setData([])
            setError(error.toString())
        }

        setSpinner("")
    }

    react.useEffect(() => {

        callApi()

    }, [])


    const handleChange = (e) => {
        setSearch(e.target.value)
    }


    const handleClick = async(e) => {
        await setSpinner("loading...")
        callApi()
    }


    return <>
        <label for-={'search'}>search</label>
        <input type={'text'} id={'search'} value={search} onChange={handleChange}/>
        <button onClick={handleClick}>click</button>
        <div>{errorIndeed}</div>
        <div>{spinner}</div>

        <ul>
            {
                data.map((c, index) => {
                    return <li key={index}><a href={c.url}>{c.title}</a></li>
                })
            }
        </ul>

    </>

}

export default Container
