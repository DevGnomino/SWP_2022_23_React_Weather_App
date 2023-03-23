import './App.css';
import React, { useEffect, useState } from "react";
import DayCard from './components/DayCard';
import WeatherDetails from './components/WeatherDetails';
import GetWeatherFromAPI from './api/OpenWeather';
import Timeline from './components/Timeline'
import SearchBar from './components/SearchBar';


function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [locName, setLocName] = useState("");
  
  //initial data loading
  useEffect(() => {
    if(localStorage.getItem("loc") && localStorage.getItem("lat") && localStorage.getItem("lon")){
      setLocName(localStorage.getItem("loc"));
      var lat = localStorage.getItem("lat");
      var lon = localStorage.getItem("lon");
    } else {
      setLocName("Stadt Bregenz, Vorarlberg, AT");
      var lat = 47.5025779;
      var lon = 9.7472924;
    }
    
    (async () => {
      setWeatherData(await GetWeatherFromAPI(lat, lon));
    })();
  }, []);

  //Data loading if location is changed through Search Bar
  const LoadNewLocData = async (loc, lat, lon) => { 
    setLocName(loc);
    // Store the last Location
    localStorage.setItem("loc", loc);
    localStorage.setItem("lat", lat);
    localStorage.setItem("lon", lon);
// localStorage.removeItem("name");

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
                <SearchBar fetchData={weatherData} onLocClick={LoadNewLocData} locName={locName}/>
              </div>
              <div className='LocationInnerDiv'>
                {weatherData.daily.map((day, i) => {
                  return <DayCard key={i} keyUsable={i} onClick={HandleDayCardClick} data={day}/>
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