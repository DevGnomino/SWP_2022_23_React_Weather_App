
function GetWeatherFromAPI() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
    fetch("https://api.openweathermap.org/data/3.0/onecall?lat=47&lon=9&appid=f3646ecb50d236f2655587bc51a330df", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}