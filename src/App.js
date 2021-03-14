import logo from './logo.svg';
import './App.css';

const data = ["hello", "world"];
const n1 = 5
const n2 = 6
const string = "I love React!"

function App() {
  return (
    // <div className="App">

    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       AppleSeeds React App
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Click Me
    //     </a>
    //   </header>
    // </div>
      <div className="App">

        {data.join(' ')}
        <br/>
          {(n1 + n2)}
      <br/>
          {'the string length is: ' + string.length}
      </div>

  );
}

export default App;
