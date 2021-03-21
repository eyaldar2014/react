// child to parent cheat-sheet :
//
// asPropVarToChild:: ' parentCallback = {this.elementCallBack} '
// asMethodInParentClass:: ' elementCallBack =(childData)=>{'function code here'} '
// this.props.parentCallback('data from child'); command to send data to parent
//

import react from "react";
import Container from "./Container.js"

import './style.css'


class Data extends react.Component {

    constructor(props) {
        super();

        this.state = {
            data: [
                {
                    name: "John", birthday: "1-1-1995", favoriteFoods: {
                        meats: ["hamburgers", "sausages"],
                        fish: ["salmon", "pike"],
                    },
                },
                {
                    name: "Mark", birthday: "10-5-1980", favoriteFoods: {
                        meats: ["hamburgers", "steak", "lamb"],
                        fish: ["tuna", "salmon", "barracuda"],
                    },
                },
                {
                    name: "Mary", birthday: "1-10-1977", favoriteFoods: {
                        meats: ["ham", "chicken"],
                        fish: ["pike"],
                    },
                },
                {
                    name: "Thomas", birthday: "1-10-1990", favoriteFoods: {
                        meats: ["bird", "rooster"],
                        fish: ["salmon"],
                    },
                },
                {
                    name: "Johnny", birthday: "1 - 10 - 1992", favoriteFoods: {
                        meats: ["hamburgers", "lamb"], fish: ["anchovies", "tuna"],
                    },
                },]
        }
    }

    render() {
        // console.log('[render]')
        // console.log(this.props)

        return <>
            <Container data={this.state.data}/>
        </>
    }

}


export default Data