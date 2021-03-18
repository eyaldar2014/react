
// cancelSubmit = () => {
//     this.setState({
//         submitValue: 'continue',
//         review: '',
//         review2: '',
//         review3: '',
//         review4: ''
//     })
// }
//
// //can send this to a new "submit" component with '"review" component' as a child
// onsubmitFunc = (e) => {
//     // console.log(e.target.value)
//     if (e.target.value === 'continue') {
//         e.preventDefault()
//         this.setState({
//             submitValue: 'send'
//         })
//         this.createReviewDiv()
//     }
// }

// dont forget :
// <input type={'submit'} value={this.state.submitValue} onClick={this.onsubmitFunc}/>
// <input type={'button'} value={'cancel'} onClick={this.cancelSubmit}/>