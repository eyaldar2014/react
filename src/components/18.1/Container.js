import react from 'react';
import TextBox from "./TextBox";

const Container = () => {

    const lorem = 'lorem1 lorem2 lorem3 lorem4 lorem5 lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem '

    return <>
        <TextBox text={lorem} words={4}/>

    </>
}

export default Container