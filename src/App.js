import './App.css';
import MyRGBPanel from './rgbpanel/MyRGBPanel';
import MySlider from './rgbpanel/MySlider';
import MyCalculator from './components/MyCalculator';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>5B0G0904 廖苡溱</h3>
        {/* <h3>MySlider</h3>
        <MySlider/> */}
        <h3>MyRGBPanel</h3>
        <MyRGBPanel/>
        <h3>MyCalculator</h3>
        <MyCalculator/>
      </header>
    </div>
  );
}

export default App;
