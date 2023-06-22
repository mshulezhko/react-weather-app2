import './App.css';
import Weather from './components/Weather'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Mariia Shulezhko and is <a href="https://github.com/mshulezhko/react-weather-app2" rel="noreferrer" target="_blank">open-sourced in GitHub</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
