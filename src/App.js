import './assets/App.css';
import Search from './components/Search';
import WeatherDisplay from './components/WeatherDisplay';

function App() {
  return (
    <div className="App">
      <h1>Weather API</h1>
      <Search />
      <WeatherDisplay />
    </div>
  );
}

export default App;
