import react from "react";

import {BrowserRouter, Route, Link, Switch} from "react-router-dom";

import HomePage from "./HomePage";
import Products from "./Products";


class Header extends react.Component {

    constructor(props) {
        super();

        this.state = {
            products: ''
        }
    }

    render() {
        // console.log('[render]')
        // console.log(this.state)


        return( <>
                <div>
                    <nav className={'header'}>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/products" >Products</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
        </>)
    }

}


export default Header