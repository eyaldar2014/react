import react from "react";
import './style.css'


const Container = (props) => {

    const videoBox = react.useRef()

    const pauseFunc =(e)=>{
        videoBox.current.pause()
    }

    const playFunc =(e)=>{
        videoBox.current.play()
    }


    return <>
        <button onClick={playFunc}>play</button>
        <button onClick={pauseFunc}>pause</button>

        <div>
            <video
                ref={videoBox}
                src={'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4'} />
        </div>


    </>
}

export default Container