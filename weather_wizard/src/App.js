import './App.css';
import DayCard from './components/DayCard';
import OpenWeather from './api/OpenWeather.js';

function App() {
  return (
    <div className='App' onLoad={OpenWeather.GetWeatherFromAPI}>
      <div className='Content'>
        <div className='InnerContent'>
          <div className='LocationDiv'>
            <DayCard test="Hallo" />
          </div>
          <div className='TimelineDiv'></div>
          <div className='DescDiv'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
