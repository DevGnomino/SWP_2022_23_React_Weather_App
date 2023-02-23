import './App.css';
import DayCard from './components/DayCard';
//import './api/OpenWeather.js';
//import GetWeatherFromAPI from './api/OpenWeather.js';
import React, { useEffect, useState } from "react";
import GetWeatherFromAPI from './api/OpenWeather';

function App() {
  const [fetchData, setPage] = useState([]);

  useEffect(() => {
    (async () => {
      setPage(await GetWeatherFromAPI());
    })();
  }, []);

  try {
    return (
      <div className='App'>
        <div className='Header'>
          <h1>weather wizard</h1>
        </div>
        <div className='Content'>
          <div className='InnerContent'>
            <div className='LocationDiv'>
              <div className='LocationInnerDiv'>
                {fetchData.daily.map(day => {
                  return <DayCard data={day}></DayCard>
                })}
              </div>
            </div>
            <div className='TimelineDiv'></div>
            <div className='DescDiv'></div>
          </div>
        </div>
      </div>
    );
  } catch (error) { console.log(error) }
}

export default App;