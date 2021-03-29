import react from 'react';


const Container = (props) => {
    // console.log(props.text)
    // console.log(props.words)

    const text = props.text
    const words = props.words

    const [display, setDisplayText] = react.useState({
        text: null,
        button: '',
    })
    // console.log(display)

    const displayLess = () => {
        // console.log('displayLess')

        let newArray = text.split(' ')
        newArray = newArray.slice(0, words).join(' ')
        // console.log(newArray)

        return (setDisplayText({
            text: newArray,
            btn: <button onClick={displayMore}>display more</button>
        }))
    }

    const displayMore = () => {

        return (setDisplayText({
            text: text,
            btn: <button onClick={displayLess}>display less</button>
        }))
    }

    //on mounting :
        if (display.text === null) {

            if (text.split(' ').length > words) {
                displayLess()
            } else {
                setDisplayText({
                    text: text,
                    btn: ''
                })
            }
        }


    return <>

        <div>
            {display.text}
            {display.btn}
        </div>

    </>
}

export default Container