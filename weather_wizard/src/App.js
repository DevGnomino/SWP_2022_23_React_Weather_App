import './App.css';
import React, { useEffect, useState } from "react";
import DayCard from './components/DayCard';
import { WeatherDetails } from './components/DayCard';
//import './api/OpenWeather.js';
//import GetWeatherFromAPI from './api/OpenWeather.js';
import GetWeatherFromAPI from './api/OpenWeather';

function App() {

  const [fetchData, setPage] = useState([]);

  useEffect(() => {
    (async () => {
      setPage(await GetWeatherFromAPI());
    })();
  }, []);

  //Click on daycards
  const [dayClicked, setClicked] = useState(0);
  
  function HandleDayCardClick(dayIndex) {
    return function() {
      console.log(dayIndex);
      setClicked(dayIndex);
    }
  };

  try {
    return (
      <div className='App'>
        <div className='Header'>
          <p>weather wizard</p>
        </div>
        <div className='Content'>
          <div className='InnerContent'>
            <div className='LocationDiv'>
              <div className='LocationInnerDiv'>
                {fetchData.daily.map((day, i) => {
                  return <DayCard key={i} keyUsable={i} onClick={HandleDayCardClick} data={day} DayCard/>
                })}
              </div>
            </div>
            <div className='TimelineDiv'></div>
            
            {WeatherDetails(fetchData, dayClicked)}
          </div>
        </div>
      </div>
    );
  } catch (error) { console.log(error) }
}

export default App;