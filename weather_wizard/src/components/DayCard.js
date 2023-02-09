import React from 'react'
import styles from "./DayCard.module.css"
import {FaAndroid} from 'react-icons/fa'

export default function DayCard(props) {
  
  try {
    return (
      <div className={styles.card}>
          <p>{props.data.temp.day}</p>
          {console.log(props.data.temp.day)}
          <FaAndroid size={80}></FaAndroid>
      </div>
    );
      
  } catch (error) {
    console.log("Error");
    return (<p>There has been a focking error!</p>)
  }
}
