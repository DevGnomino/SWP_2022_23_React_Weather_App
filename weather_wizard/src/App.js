import './App.css';
import DayCard from './components/DayCard';
import './api/OpenWeather.js';
import GetWeatherFromAPI from './api/OpenWeather.js';


function App() {
  //GetWeatherFromAPI();

  return (
    <div className='App'>
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
