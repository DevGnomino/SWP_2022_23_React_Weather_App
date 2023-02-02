import React from 'react'
import styles from "./DayCard.module.css"
import {FaAndroid} from 'react-icons/fa'

export default function DayCard(props) {
  return (
    <div className={styles.card}>
        <p>{props.test.name}</p>
        <FaAndroid size={80}></FaAndroid>
    </div>
  );
}
