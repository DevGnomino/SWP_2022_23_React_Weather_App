import './App.css';
import DayCard from './components/DayCard';
import React, { Component } from 'react';
import { useEffect, useState } from 'react';

function App() {
  // const [WeatherData, setText] = useState(null);

  // useEffect(() => {
  //   setText(get_data());
  // }, []);

  return (
    <div className='App'>
      <div className='Header'>
        <h1>weather wizard</h1>
      </div>
      <div className='Content'>
        <div className='InnerContent'>
          <div className='LocationDiv'>
            <div className='LocationInnerDiv'>

              <DayCard test="HI"></DayCard>
              {/* <DayCard test="Thu" />
            <DayCard test="Fri" />
            <DayCard test="Sat" />
            <DayCard test="Sun" />
            <DayCard test="Mon" />
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