import style from './WeatherDetails.module.css'


export default function WeatherDetails(props)
{
    //console.log(props.fetchData.daily[props.info]);
    let desc = props.fetchData.daily[props.info].weather[0].description;
    const descSplitted = desc.split(" ");
    desc = "";
    for (let i = 0; i < descSplitted.length; i++) {
        desc += descSplitted[i][0].toUpperCase() + descSplitted[i].substr(1) + " "; 
    }
  
    return (
        <div className='DescDiv'> 
            <p>{"Description: "+ desc}</p>
        </div>
    ); 
}