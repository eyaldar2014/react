// child to parent cheat-sheet :
//
// asPropVarToChild:: ' parentCallback = {this.elementCallBack} '
// asMethodInParentClass:: ' elementCallBack =(childData)=>{'function code here'} '
// this.props.parentCallback('data from child'); command to send data to parent
//

import react from "react";
import axios from "axios";

import './style.css'
import Button from "./Button";
// import Categories from "./Categories";
import Select from "./Select";

class X extends react.Component {

    constructor(props) {
        super();

        this.state = {
            random: null,
            secondJoke : '' ,
            categories: ['categories'],
            category : 'animal'
        }
    }

    async componentDidMount() {
        const joke = await axios.get('https://api.chucknorris.io/jokes/random');
        const categories = await axios.get('https://api.chucknorris.io/jokes/categories')

        this.setState({
            // joke : joke.data.value ,
            categories: categories.data ,
        })
    }

    getRandomJoke = async () => {
        const random = await axios.get("https://api.chucknorris.io/jokes/random")
        this.setState({joke: random.data.value,})

        return true
    }

    getJokeByCategory = async () => {
        const request = await axios.get(`https://api.chucknorris.io/jokes/random?category=${this.state.category}`);
        console.log(request)
        this.setState({secondJoke: request.data.value })

        return true
    }

    getCategory=(category)=>{
        this.setState({
            category: category
        })
    }

    render() {
        // console.log('[render]')
        // console.log(this.state)
        // console.log(this.state.categories)

        return <>
            <h1>GET A JOKE</h1>
            <h3>by Chuck Norris</h3>
            <Button name={'random joke'} btnFunction={this.getRandomJoke}/>
            <div className={'displayJoke'}>{this.state.joke}</div>

            <Button name={'Joke By Category'} btnFunction={this.getJokeByCategory}/>
            <Select categories={this.state.categories} getCategory={this.getCategory}/>
            <div className={'displayJoke'} renderJoke={this.getJokeByCategory}>{this.state.secondJoke}</div>

        </>
    }

}


export default X