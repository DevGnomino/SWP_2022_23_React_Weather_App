
export default function GetWeatherFromAPI() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      //Token einfügen, lat und lon als Parameter übergeben, exclude verwenden
    fetch("https://api.openweathermap.org/data/3.0/onecall?lat=47&lon=9&appid=TOKEN", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}