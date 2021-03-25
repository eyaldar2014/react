import react from "react";
import {Link} from "react-router-dom";

import ProductDetail from "./ProductDetail";
import data from "./Store";


class Products extends react.Component {

    constructor(props) {
        super();

        this.state = {}
    }


    render() {
        // console.log('[render]')
        // console.log(this.state)
        // console.log(data.products)

        return (
            <div>
                {data.products.map(item => (
                    <Link to={'/products/' + item.id}>
                        {item.title}
                    </Link>
                ))}
            </div>

        )

    }

}


export default Products