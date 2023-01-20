import './App.css';
import DayCard from './components/DayCard';
import './api/OpenWeather.js';
import GetWeatherFromAPI from './api/OpenWeather.js';


function App() {
  //GetWeatherFromAPI();

  return (
<<<<<<< HEAD
    <div className='App' onLoad={OpenWeather.GetWeatherFromAPI}>
      <div className='Header'>
        <h2>weather wizard</h2>
      </div>
=======
    <div className='App'>
>>>>>>> d6299d74642397862024f357106ad0dc7e856624
      <div className='Content'>
        <div className='InnerContent'>
          <div className='LocationDiv'>
            <div className='LocationInnerDiv'>
              <DayCard test="Hallo" />
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
