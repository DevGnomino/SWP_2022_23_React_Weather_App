import React from 'react'
import styles from "./DayCard.module.css"
import { FaBeer } from 'react-icons/fa';

export default function DayCard(props) {
  return (
    <div className={styles.card}>
        <p>{props.test}</p>
    </div>
  )
}
