import React from 'react'
import styles from "./DayCard.module.css"
import { WiDaySunny, WiDaySunnyOvercast, WiDayCloudy, WiCloud, WiCloudy, WiShowers, WiRain, WiSnow, WiFog } from "react-icons/wi";
// Weather Icons:
// 01 - WiDaySunny
// 02 - WiDaySunnyOvercast
// 03 - WiDayCloudy
// 04 - WiCloud
// 09 - WiCloudy
// 10 - WiShowers
// 11 - WiRain
// 13 - WiSnow
// 50 - WiFog

export function WeatherDetails(fetchData, info)
{
  console.log(fetchData.daily[info]);
  let desc = fetchData.daily[info].weather[0].description;
  const descSplitted = desc.split(" ");
  desc = "";
  for (let i = 0; i < descSplitted.length; i++) {
    desc += descSplitted[i][0].toUpperCase() + descSplitted[i].substr(1) + " "; 
  }
  
  return <div className='DescDiv'> 
      <p>{"Description: "+ desc}</p>
    </div>; 
}

export default function DayCard(props) {
  // let dateTime = new Date(props.dt);
  try {
    function round(value, precision) {
      let multiplier = Math.pow(10, precision || 0);
      return Math.round(value * multiplier) / multiplier;
    }

    function getIcon(IconStr) {
      let IconSize = 100;
      switch (IconStr.slice(0, 2)) {
        case '01':
          return <WiDaySunny size={IconSize}></WiDaySunny>
        case '02':
          return <WiDaySunnyOvercast size={IconSize}></WiDaySunnyOvercast>
        case '03':
          return <WiDayCloudy size={IconSize}></WiDayCloudy>
        case '04':
          return <WiCloud size={IconSize}></WiCloud>
        case '09':
          return <WiCloudy size={IconSize}></WiCloudy>
        case '10':
          return <WiShowers size={IconSize}></WiShowers>
        case '11':
          return <WiRain size={IconSize}></WiRain>
        case '13':
          return <WiSnow size={IconSize}></WiSnow>
        case '50':
          return <WiFog size={IconSize}></WiFog>
      }
      return;
    }

    return (
      <div className={styles.Card} onClick={props.onClick(props.keyUsable)}>
        <div className={styles.WeatherDate}>
          <p>{new Date(props.data.dt * 1000).toDateString()}</p>
        </div>
        <div className={styles.Temp}>
          <div className={styles.DayTemp}>
            <p>{round(props.data.temp.day, 1)}</p>
          </div>
          <div className={styles.MinMaxTemp}>
            <div className={styles.MaxTemp}>
              <p>{round(props.data.temp.max, 1)}</p>
            </div>
            <div className={styles.MinTemp}>
              <p>{round(props.data.temp.min, 1)}</p>
            </div>
          </div>
          <div className={styles.CTemp}>
            <p>°C</p>
          </div>
        </div>
        <div className={styles.WeatherIcon}>
          {getIcon(props.data.weather[0].icon)}
        </div>
      </div>
    );
  } catch (error) { console.log(error) }
}
