import react from 'react';
import './style.css'

import API from './Api'

const Container = () => {


    const [data, setData] = react.useState()


    // react.useEffect(() => {}[])

    react.useEffect(() => {

        tenTimes()

    }, [])


    const tenTimes=async()=>{

            Promise.all([callApi(), callApi(), callApi()]).then(function(values) {
              console.log(values);
            });

    }

   const callApi = async () => {

        try {
            const result = await API.get()
            console.log(result.data.results)
//             return result
//             array.push(result.data.results)
        } catch (error) {
            console.log(error)
        }
   }




    // const handleClick =(e)=>{}
    // const handleChange =(e)=>{}


    return <>


    </>
}

export default Container