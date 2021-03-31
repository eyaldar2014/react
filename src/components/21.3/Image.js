import react from "react";

import color from './color.jpg'
import black from './black.jpg'


const Image = (props) => {

    const [kind, setKind] = react.useState(props.kind)
    const [imgKind, imgKindSet] = react.useState('')


    react.useEffect(() => {
        if (kind === 'color') {
            imgKindSet(color)
        } else {
            imgKindSet(black)
        }
        console.log('now')

    }, [kind])

    return <>
        <div className={'img'}>
            <img className="img"
                 src={imgKind}
            />
        </div>

    </>
}

export default Image