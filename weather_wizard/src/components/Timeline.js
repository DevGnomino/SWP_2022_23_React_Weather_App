import React from 'react'
import styles from "./Timeline.module.css"
import { FaAndroid } from 'react-icons/fa'

export default function Timeline(props) {
    

  /*function getIcon(IconStr) {
    let IconSize = 100;
    switch (IconStr.slice(0, 2)) {
      case '01':
        return <WiDaySunny size={IconSize}></WiDaySunny>;
      case '02':
        return <WiDaySunnyOvercast size={IconSize}></WiDaySunnyOvercast>;
      case '03':
        return <WiDayCloudy size={IconSize}></WiDayCloudy>;
      case '04':
        return <WiCloud size={IconSize}></WiCloud>;
      case '09':
        return <WiCloudy size={IconSize}></WiCloudy>;
      case '10':
        return <WiShowers size={IconSize}></WiShowers>;
      case '11':
        return <WiRain size={IconSize}></WiRain>;
      case '13':
        return <WiSnow size={IconSize}></WiSnow>;
      case '50':
        return <WiFog size={IconSize}></WiFog>;
      default:
        console.log("switch case error");
    }
    return;
  }*/

  return (
    <div className='TimelineDiv'>
      {() => {
        for(let i=0;i<48;i++) {
          return <p>props.data.hourly[i]</p>;
        }
      }}
    </div>
  );
}