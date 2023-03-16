import styles from './WeatherDetails.module.css'



const formatDate = (UnixDate) => {
    let dateStr = new Date(UnixDate * 1000).toLocaleString(
      "en-US",
      {
        hour: "2-digit",
        minute: "2-digit"
      });
    return dateStr;
}

export default function WeatherDetails(props)
{
    let desc = props.fetchData.daily[props.info].weather[0].description;
    const descSplitted = desc.split(" ");
    desc = "";
    for (let i = 0; i < descSplitted.length; i++) {
        desc += descSplitted[i][0].toUpperCase() + descSplitted[i].substr(1) + " "; 
    }

    console.log(props.fetchData.daily[props.info]);
    
    let sunrise = formatDate(props.fetchData.daily[props.info].sunrise);
    let sunset = formatDate(props.fetchData.daily[props.info].sunset);
    
    let windSpeed = props.fetchData.daily[props.info].wind_speed;
    let windTemp = props.fetchData.daily[props.info].wind_deg;

  
    return (
        <div className={styles.DescDiv}> 
            <p className={styles.Description}>{desc}</p>
            <p className={styles.Description}>{"Sunrise on "+ sunrise}</p>
            <p className={styles.Description}>{"Sunset on "+ sunset}</p>
            <p className={styles.Description}>{"Windspeed: "+ windSpeed}</p>
            <p className={styles.Description}>{"Wind something: "+ windTemp}</p>
            <p className={styles.Description}>{"Wind something: "+ windTemp}</p>
            <p className={styles.Description}>{"Wind something: "+ windTemp}</p>
            <p className={styles.Description}>{"Wind something: "+ windTemp}</p>
        </div>
    ); 
}