import './App.css';
import DayCard from './components/DayCard';
//import './api/OpenWeather.js';
//import GetWeatherFromAPI from './api/OpenWeather.js';
import React, {useEffect, useState} from "react";
import GetWeatherFromAPI from './api/OpenWeather';

function App() {
  
  const [ fetchData, setPage ] = useState([]);

  useEffect(() => {(async () => {
    setPage(await GetWeatherFromAPI());
  })();}, []);


  try{
    return (
      <div className='App'>
      <div className='Header'>
        <h1>weather wizard</h1>
      </div>
      <div className='Content'>
        <div className='InnerContent'>
          <div className='LocationDiv'>
            <div className='LocationInnerDiv'>
              {/*<DayCard data={fetchData} dayNr={0}/>
              <DayCard data={fetchData} dayNr={1}/>
              <DayCard data={fetchData} dayNr={2}/>
              <DayCard data={fetchData} dayNr={3}/>
              <DayCard data={fetchData} dayNr={4}/>
              <DayCard data={fetchData} dayNr={5}/>
              <DayCard data={fetchData} dayNr={6}/>
              <DayCard data={fetchData} dayNr={7}/>*/}
              { fetchData.daily.map(day => {
                return <DayCard data={day}/>
              }) }
            </div>
          </div>
          <div className='TimelineDiv'></div>
          <div className='DescDiv'></div>
        </div>
      </div>
    </div>
    );
  }
  catch (Error) 
  {
    console.log("Error");
  }
}

export default App;