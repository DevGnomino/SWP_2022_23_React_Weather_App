import React from 'react'
import styles from "./DayCard.module.css"
import { FaAndroid } from 'react-icons/fa'

export default function DayCard(props) {
  // let dateTime = new Date(props.dt);
  try {

    return (
      <div className={styles.Card}>
        <div className={styles.WeatherDate}>
          {/* <p>{dateTime.toISOString()}</p> */}
        </div>
        <div className={styles.Temp}>

          <div className={styles.DayTemp}>
            <p>{props.data.temp.day}</p>
          </div>
          <div className={styles.MinMaxTemp}>
            <div className={styles.MaxTemp}>
              <p>{props.data.temp.max}</p>
            </div>
            <div className={styles.MinTemp}>
              <p>{props.data.temp.min}</p>
            </div>
          </div>
        </div>
        <div className={styles.WeatherIcon}></div>
        <div className={styles.WeatherDesc}></div>
        {/* <p>{props.data.lat}</p>
        console.log(props.data)
      /* 
        - Datum
        - Durchschnittstemperatur; Höchste und Niedrigste Temp 
        - Wetter (icon)
        - description
        */}

        <FaAndroid size={80}></FaAndroid>
      </div>
    );
  } catch (error) { console.log(error) }
}
