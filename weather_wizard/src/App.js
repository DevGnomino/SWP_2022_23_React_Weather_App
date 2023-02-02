import './App.css';
import DayCard from './components/DayCard';
//import './api/OpenWeather.js';
//import GetWeatherFromAPI from './api/OpenWeather.js';
import React, {useEffect, useState} from "react";
import usefetch from "react-async-usefetch";

function App() {
  
  //console.log(GetWeatherFromAPI());
  
  //const [fetchData, setData] = useState([]);

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
    
  //https://api.openweathermap.org/data/2.5/weather?q=Bregenz,at&appid=06e572964e1e549dffb981af5fe641ff
  /*fetch("https://api.openweathermap.org/data/3.0/onecall?lat=47&lon=9&appid=f3646ecb50d236f2655587bc51a330df", requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result);
      setData(result);
    })
    .catch(error => console.log('error', error));

  console.log(fetchData);*/


  const [ fetchData, setPage ] = useState([]);

  useEffect(() => {(async () => {
    const res = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Bregenz,at&appid=06e572964e1e549dffb981af5fe641ff", requestOptions)
                        .catch(err => setPage(err.message));
    if (!res) return;
    const txt = await res.json();
    setPage(txt);
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
