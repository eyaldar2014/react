import react from "react";

const Container =()=>{

    const [movie, setMovie] = react.useState()

    react.useEffect(async() => {

        const result = await (await fetch('https://swapi.dev/api/films/1/')).json()
        setMovie([result.title, result.director])

    }, [])



    return<>
        <div>{movie[0]}</div>
        <div>{movie[1]}</div>
    </>

}

export default Container
