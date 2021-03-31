import react from 'react';
import axios from "axios";
import './style.css'

const Container = () => {

    const [content, setContent] = react.useState('')


    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();


    const getData = async (user) => {
        const response = await axios.get('https://randomuser.me/api/', {cancelToken: source.token}).catch((err)=>{
            console.log(err)
        })

        if(response){
            setContent(response.data.results[0].email)
        }
    }

    react.useEffect(() => {
        getData()
        return () => {
            source.cancel('Operation canceled by the user.');
        }
    }, [])


    return <>
        <div>{content}</div>


    </>
}

export default Container
