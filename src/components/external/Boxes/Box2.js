import react from 'react';
import Box3 from './Box3'
class Box2 extends react.Component{
    constructor(props) {
        super();
    }

    render() {
        return <div className="box2">
           <Box3/>
        </div>
    }
}

export default Box2;
