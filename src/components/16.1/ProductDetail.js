import react from "react";

import {Link} from "react-router-dom";
import data from "./Store";

class ProductDetail extends react.Component {

    constructor(props) {
        super();

        this.state = {data: data.products}
    }


    render() {
        // console.log('[render]')
        // console.log(this.state.data)
        console.log(this.props)

        const product = this.state.data[this.props.name - 1]

        console.log(product)
        return <>

            <h1>{product.title}</h1>

            <div style={{background: 'url(' + product.imageUrl + ') no-repeat center center/cover'}}
                 className={'img'}></div>

            <h2>{product.size}</h2>

            <Link to='/products'>
                <button>back</button>
            </Link>

        </>
    }

}


export default ProductDetail