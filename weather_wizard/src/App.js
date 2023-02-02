import './App.css';
import DayCard from './components/DayCard';
//import './api/OpenWeather.js';
//import GetWeatherFromAPI from './api/OpenWeather.js';
import React, {useEffect, useState} from "react";
import usefetch from "react-async-usefetch";
import GetWeatherFromAPI from './api/OpenWeather';

function App() {
  
  const [ fetchData, setPage ] = useState([]);

  useEffect(() => {(async () => {
    setPage(await GetWeatherFromAPI());
  })();}, []);


  return (
    <div className='App'>
    <div className='Header'>
      <h1>weather wizard</h1>
    </div>
    <div className='Content'>
      <div className='InnerContent'>
        <div className='LocationDiv'>
          <div className='LocationInnerDiv'>
            <DayCard test={fetchData} />
            <DayCard test="Web" />
            <DayCard test="Thu" />
            <DayCard test="Fri" />
            <DayCard test="Sat" />
            <DayCard test="Sun" />
            <DayCard test="Mon" />
            <DayCard test="Tue" />
            {console.log(fetchData)}
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
