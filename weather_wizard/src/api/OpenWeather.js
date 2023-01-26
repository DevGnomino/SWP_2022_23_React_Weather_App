export default class WeatherAPI {
  constructor() {
    this.fullAPIResponse = "";
    this.GetWeatherFromAPI();
    //console.log(this.fullAPIResponse);
  }

  GetWeatherFromAPI() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
    var test = "";

      //Token einfügen, lat und lon als Parameter übergeben, exclude verwenden
    fetch("https://api.openweathermap.org/data/3.0/onecall?lat=47&lon=9&appid=f3646ecb50d236f2655587bc51a330df", requestOptions)
    .then(response => response.text())
    .then(result => test = result)
    .catch(error => console.log('error', error));
    console.log(test);
    
  }


  GetDateTime() {
    console.log(new Date(1674726742*1000)); //-(3600*1000)
  }
}