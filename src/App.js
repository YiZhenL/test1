
import "./App.css";
import MySlider from "./MySlider";

function App() {
  return (
    <div className="App">
      <h1>Javascript程式設計</h1>
      <h2>5B0G0904 廖苡溱</h2>
      <span>R: </span><MySlider />
      <span>G: </span><MySlider />
      <span>B: </span><MySlider />
      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello React! 2024.5.1</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

      {/* </header> */}
    </div>
  );
}

export default App;