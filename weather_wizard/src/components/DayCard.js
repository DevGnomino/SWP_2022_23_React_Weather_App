import React from 'react'
import styles from "./DayCard.module.css"

export default function DayCard(props) {
  return (
    <div className={styles.card}>
        <p>{props.test}</p>
    </div>
  )
}
