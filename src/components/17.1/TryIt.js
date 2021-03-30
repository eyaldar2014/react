import react from 'react';
import axios from 'axios';

let a = false

const TryIt = (props) => {


    const tryFunction = async() => {

        const response = await axios.get(`https://605f3470e96e5c0017408646.mockapi.io/api/crud/thing`)
        console.log(response.data)


        const user= {
            name: "eyal",
            da: "eyal",
            la: "eyal",
        }
        const response2 = await axios.post(`https://605f3470e96e5c0017408646.mockapi.io/api/crud/thing`, {user})
        const response3 = await axios.post(`https://605f3470e96e5c0017408646.mockapi.io/api/crud/thing`, {user})
        console.log(response3.data.user)

        return a = true
    }


    if (!a) {
        tryFunction()
    }

    return <>
    </>


}

export default TryIt