
// add image to react component
// function Avatar(props) {
//     return (
//         <img className="Avatar"
//              src={props.user.avatarUrl}
//              alt={props.user.name}
//         />
//     );
// }

import react from "react";
import axios from 'axios';
import './style.css'

import Item from './Item'

class Container extends react.Component {

    constructor(props) {
        super();

        this.state = {
            name: '',
            img: '',
            id: 2,
            users: [
                {
                    id: 0,
                    name: 'first',
                    img: 'https://images.newscientist.com/wp-content/uploads/2020/03/31210900/b8kk6g_web.jpg?width=700'
                },
                {
                    id: 1,
                    name: 'second',
                    img: 'https://images.newscientist.com/wp-content/uploads/2020/03/31210900/b8kk6g_web.jpg?width=700'
                }
            ]
        }
    }

    read = (id) => {

        let user = this.state.users.filter(user => {
            return user.id === id
        })

        return user
    }

    write = (name, img) => {

        let temp = {
            id: this.state.id,
            name: name,
            img: img
        }

        let newArray = this.state.users

        newArray.push(temp)

        return this.setState({
            id: this.state.id + 1,
            users: newArray,
            name: '',
            img: ''
        })
    }

    delete = (id) => {

        let newArray = this.state.users.filter(user => {
            return user.id !== id
        })

        return this.setState({
            users: newArray
        })
    }

    updateName = (id, name) => {

        let newArray = this.state.users.map(user => {
            if (user.id === id) {
                return {
                    id: id,
                    name: name,
                    img: user.img
                }
            } else {
                return user
            }
        })

        return this.setState({
            users: newArray
        })
    }

    updateImg = (id, img) => {

        console.log('here')
        console.log(id)
        console.log(img)

        let newArray = this.state.users.map(user => {
            if (user.id === id) {
                return {
                    id: id,
                    name: user.name,
                    img: img,
                    newImg : ''
                }
            } else {
                return user
            }
        })

        return this.setState({
            users: newArray
        })
    }

    handleIt=(e)=>{
        // console.log(e.target.name)

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    add=()=>{
        this.write(this.state.name , this.state.img)
    }


    render() {

        // console.log('[render]')
        // console.log(this.state)
        console.log(this.state.users)

        let users = this.state.users

        return <>

            <input type={"text"} name={'name'} value={this.state.name} onChange={this.handleIt} placeholder={'name'}/>
            <input type={"text"} name={'img'} value={this.state.img} onChange={this.handleIt} placeholder={'img'}/>
            <button onClick={this.add}>add</button>
            <input type={"text"} name={'newImg'} value={this.state.newImg} onChange={this.handleIt}  placeholder={'new img'}/>
            <input type={"text"} name={'newName'} value={this.state.newName} onChange={this.handleIt}  placeholder={'new name'}/>

            {users.map(user => {
                return <Item name={user.name} img={user.img} delete={this.delete} newImg={this.state.newImg} newName={this.state.newName} editImg={this.updateImg} editName={this.updateName} id={user.id} />
                })
            }
        </>
    }

}


export default Container