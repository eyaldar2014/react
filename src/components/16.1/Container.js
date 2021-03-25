// child to parent cheat-sheet :
//
// asPropVarToChild:: ' parentCallback = {this.elementCallBack} '
// asMethodInParentClass:: ' elementCallBack =(childData)=>{'function code here'} '
// this.props.parentCallback('data from child'); command to send data to parent
//

import './style.css'
import react from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import data from './Store'
import Header from './Header'
import Products from "./Products";
import HomePage from "./HomePage";
import ProductDetail from "./ProductDetail";
import NotFound from "./NotFound";


class Container extends react.Component {

    constructor(props) {
        super();

        this.state = {data: data.products}
    }


    render() {
        // console.log('[render]')
        // console.log(this.state)

        return <>


            <BrowserRouter>
                <Header/>


                <Switch>
                    {this.state.data.map(item=>(
                        <Route path={"/products/" + item.id}>
                            <ProductDetail name={item.id}/>
                        </Route>
                    ))}

                    <Route exact path="/products">
                        <Products />
                    </Route>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path="/">
                        <NotFound />
                    </Route>



                </Switch>
            </BrowserRouter>

        </>
    }

}


export default Container