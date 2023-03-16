import './App.css';
import React, { useEffect, useState } from "react";
import DayCard from './components/DayCard';
import WeatherDetails from './components/WeatherDetails';
import GetWeatherFromAPI from './api/OpenWeather';
import Timeline from './components/Timeline'
import SearchBar from './components/SearchBar';


function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [locName, setLocName] = useState("Stadt Bregenz, Vorarlberg, AT");
  

  //initial data loading
  useEffect(() => {
    (async () => {
      let lat = 47.5025779;
      let lon = 9.7472924;
      setWeatherData(await GetWeatherFromAPI(lat, lon));
    })();
  }, []);

  //Data loading if location is changed through Search Bar
  const LoadNewLocData = async (name, lat, lon) => { 
    setLocName(name);
    console.log("fetching data....");
    let data = await GetWeatherFromAPI(lat, lon);
    setWeatherData(data);
  }


  //Click on daycards
  const [dayClicked, setClicked] = useState(0);

  const HandleDayCardClick = (dayIndex) => {
    return function () {
      console.log(dayIndex);
      setClicked(dayIndex);
    }
  };

  try {
    return (
      <div className='App'>
        <div className='Header'>
          <p>Weather Wizard</p>
        </div>
        <div className='Content'>
          <div className='InnerContent'>
            <div className='LocationDiv'>
              <div className='LocationSearchDiv'>
                <SearchBar fetchData={weatherData} onLocClick={LoadNewLocData} locName={locName}></SearchBar>
              </div>
              <div className='LocationInnerDiv'>
                {weatherData.daily.map((day, i) => {
                  return <DayCard key={i} keyUsable={i} onClick={HandleDayCardClick} data={day} DayCard />
                })}
              </div>
            </div>
            <Timeline data={weatherData} />
            <WeatherDetails fetchData={weatherData} info={dayClicked} />
          </div>
        </div>
      </div>
    );
  } catch (error) { console.log(error) }
}

export default App;