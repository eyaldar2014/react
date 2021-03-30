import react from "react";

const Container =()=>{



    const [countries, setCountries] = react.useState([])
    const [currentCountries, setCurrentCountries] = react.useState([])
    const [search, setSearch] = react.useState('')

    react.useEffect(async() => {

        const result = await (await fetch('https://restcountries.eu/rest/v2/all')).json()

        setCountries(result)

        setCurrentCountries(result)

    }, [])



    react.useEffect(() => {

        console.log(search)
        setCurrentCountries(countries.filter(c=>(
            (c.name).includes(search)
        )))

    }, [search])



    const handleChange =(e)=>{
        return setSearch(e.target.value)
    }


    return<>
        <label htmlFor={"search"}>search</label>
        <input type={"text"} name={"search"} id={"search"} value={search} onChange={handleChange} />

        <ul>
            {
                currentCountries.map((c, index)=> {
                    return <li key={index}>{c.name}</li>
                })

            }
        </ul>

    </>

}

export default Container
