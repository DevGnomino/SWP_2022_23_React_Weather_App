import './App.css';
import DayCard from './components/DayCard';
//import './api/OpenWeather.js';
import WeatherAPI from './api/OpenWeather.js';


function App() {
  //WeatherAPI.GetWeatherFromAPI();
  var weatherAPI = new WeatherAPI();
  var result = Promise.all([weatherAPI.GetWeatherFromAPI()]);
  console.log(result);

  return (
    <div className='App'>
      <div className='Header'>
        <h1>weather wizard</h1>
      </div>
      <div className='Content'>
        <div className='InnerContent'>
          <div className='LocationDiv'>
            <div className='LocationInnerDiv'>
              <DayCard test="Tue" />
              <DayCard test="Web" />
              <DayCard test="Thu" />
              <DayCard test="Fri" />
              <DayCard test="Sat" />
              <DayCard test="Sun" />
              {/*<DayCard test="Mon" />
              <DayCard test="Tue" /> */}

            </div>
          </div>
          <div className='TimelineDiv'></div>
          <div className='DescDiv'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
