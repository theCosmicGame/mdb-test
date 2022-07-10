import logo from './logo.svg';
import './App.css';

// import { MDBBtn } from 'mdb-react-ui-kit';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        {/* <MDBBtn
          tag='a'
          href='https://mdbootstrap.com/docs/standard/getting-started/'
          target='_blank'
          role='button'
        >
          Start MDB tutorial
        </MDBBtn> */}
      </div>
    </div>
  );
}

export default App;
